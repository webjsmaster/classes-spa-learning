import ElementCreator from '../../../util/element-creator';
import View from '../../view';
import './header.css';
import LinkView from './link/link-view';
import IndexView from '../main/index/index-view.js';
import ProductView from '../main/prodicts/product-view.js';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav',
};

const NamePages = {
    INDEX: 'Главная',
    CARDS: 'Карточки',
};

const START_PAGE_INDEX = 0;

/**
 * @typedef {{name: string, callback: Function}} Page
 */

export default class HeaderView extends View {
    /**
     *
     * @param {MainView} mainComponent
     */
    constructor(mainComponent) {
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
        this.linkElements = [];
        this.configureView(mainComponent);
    }

    /**
     *
     * @param {MainView} mainComponent
     */
    configureView(mainComponent) {
        const paramsNav = {
            tag: 'nav',
            classNames: [CssClasses.NAV],
            textContent: '',
            callback: null,
        };
        const creatorNav = new ElementCreator(paramsNav);
        this.elementCreator.createContainer();
        this.elementCreator.addInnerElement(creatorNav);

        const pages = this.getPages(mainComponent);

        pages.forEach((el, index) => {
            const linkElement = new LinkView(el, this.linkElements);
            creatorNav.addInnerElement(linkElement.getHtmlElement());

            this.linkElements.push(linkElement);

            if (index === START_PAGE_INDEX) {
                el.callback();
                linkElement.setSelectedStatus();
            }
        });
    }

    /**
     *
     * @param {MainView} mainComponent
     *  @returns {Array<Page>}
     */
    getPages(mainComponent) {
        const indexView = new IndexView();
        const productView = new ProductView();

        return [
            {
                name: NamePages.INDEX,
                callback: () => mainComponent.setContent(indexView),
            },
            {
                name: NamePages.CARDS,
                callback: () => mainComponent.setContent(productView),
            },
        ];
    }
}
