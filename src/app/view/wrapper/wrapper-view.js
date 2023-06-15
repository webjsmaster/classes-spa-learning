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
    constructor() {
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

        const footerView = new FooterView();
        const mainView = new MainView();
        const headerView = new HeaderView(mainView);

        wrapper.append(
            headerView.getHtmlElement(),
            mainView.getHtmlElement(),
            footerView.getHtmlElement(),
        );
        return elementCreator;
    }
}
