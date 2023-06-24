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
        this.router = router;
        this.header = null;
        this.main = null;
        this.configureView(router);
    }

    /**
     * @param {Router} router
     * @return {ElementCreator}
     */

    configureView(router) {
        const wrapper = this.elementCreator.getElement();

        this.header = new HeaderView(router);
        this.main = new MainView();
        const footerView = new FooterView();

        wrapper.append(
            this.header.getHtmlElement(),
            this.main.getHtmlElement(),
            footerView.getHtmlElement(),
        );

        return this.elementCreator;
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
