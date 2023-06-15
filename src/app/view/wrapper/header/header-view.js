import ElementCreator from '../../../util/element-creator';
import View from '../../view';
import './header.css';
import LinkView from './link/link-view';
import { Pages } from '../../../router/pages.js';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav',
};

const NamePages = {
    INDEX: 'Главная',
    PRODUCT: 'Карточки',
    TEST: 'TEST',
};

/**
 * @typedef {{name: string, callback: Function}} Page
 */

export default class HeaderView extends View {
    /**
     * @param {Router} router
     */
    constructor(router) {
        /**
         * @type {ElementParams} params
         */
        const params = {
            tag: 'header',
            classNames: [CssClasses.HEADER],
            textContent: '',
            callback: null,
        };
        super(params);
        this.linkElements = new Map();
        this.configureView(router);
    }

    /**
     * @param {Router} router
     */
    configureView(router) {
        const paramsNav = {
            tag: 'nav',
            classNames: [CssClasses.NAV],
            textContent: '',
            callback: null,
        };
        const creatorNav = new ElementCreator(paramsNav);
        this.elementCreator.createContainer();
        this.elementCreator.addInnerElement(creatorNav);

        Object.keys(NamePages).forEach((key) => {
            /**
             * @type {Page}
             */
            const linkParams = {
                name: NamePages[key],
                callback: () => router.navigate(Pages[key]),
            };
            const linkElement = new LinkView(linkParams, this.linkElements);

            creatorNav.addInnerElement(linkElement.getHtmlElement());

            this.linkElements.set(Pages[key], linkElement);
        });
    }

    /**
     *
     * @param {Page.name} namePage
     */
    setSelectedItem(namePage) {
        const linkComponent = this.linkElements.get(namePage);
        if (linkComponent instanceof LinkView) {
            linkComponent.setSelectedStatus();
        }
    }
}
