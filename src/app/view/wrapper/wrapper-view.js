import ElementCreator from '../../util/element-creator';
import View from '../view';
import FooterView from './footer/footer-view';
import MainView from './main/main-view';
import './wrapper.css';
import HeaderView from './header/header-view.js';

const CssClasses = {
    WRAPPER: 'wrapper',
};

export default class WrapperView extends View {
    /**
     * @param {Router} router
     */
    constructor(router) {
        /**
         * @type {import('../../../util/element-creator').ElementParams}
         */
        const params = {
            tag: 'div',
            classNames: [CssClasses.WRAPPER],
            textContent: '',
            callback: null,
        };
        super(params);
        this.header = null;
        this.main = null;
        this.router = router;
    }

    createView(params) {
        const elementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: params.textContent,
            callback: params.callback,
        };
        const elementCreator = new ElementCreator(elementParams);
        const wrapper = elementCreator.getElement();

        this.header = new HeaderView(this.router);
        this.main = new MainView();
        const footerView = new FooterView();

        wrapper.append(
            this.header.getHtmlElement(),
            this.main.getHtmlElement(),
            footerView.getHtmlElement(),
        );
        return elementCreator;
    }

    /**
     * @return {View}
     */
    getHeaderView() {
        return this.header;
    }

    /**
     * @return {View}
     */
    getMainView() {
        return this.main;
    }
}
