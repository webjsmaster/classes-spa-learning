import '../../style.css';
import WrapperView from './view/wrapper/wrapper-view';
import Router from './router/router.js';
import { ID_SELECTOR, Pages } from './router/pages.js';
import State from '../state/state';

export default class App {
    constructor() {
        this.wrapper = null;
        const state = new State();
        this.router = new Router(this.createRoutes(state));
        this.createView();
    }

    createView() {
        this.wrapper = new WrapperView(this.router);

        document.body.append(
            this.wrapper.getHtmlElement(),
        );
    }

    /**
     * @param {State} state
     * @return {Array<Route>}
     */
    createRoutes(state) {
        return [
            {
                path: '',
                callback: async () => {
                    const { default: IndexView } = await import('./view/wrapper/main/index/index-view');
                    this.setContent(Pages.INDEX, new IndexView(state));
                },
            },
            {
                path: `${Pages.INDEX}`,
                callback: async () => {
                    const { default: IndexView } = await import('./view/wrapper/main/index/index-view');
                    this.setContent(Pages.INDEX, new IndexView(state));
                },
            },
            {
                path: `${Pages.PRODUCT}`,
                callback: async () => {
                    const { default: ProductView } = await import('./view/wrapper/main/prodicts/product-view');
                    this.setContent(Pages.PRODUCT, new ProductView(this.router, ''));
                },
            },
            {
                path: `${Pages.PRODUCT}/${ID_SELECTOR}`,
                callback: async (id) => {
                    const { default: ProductView } = await import('./view/wrapper/main/prodicts/product-view');
                    this.setContent(Pages.PRODUCT, new ProductView(this.router, id));
                },
            },
            {
                path: `${Pages.NOT_FOUND}`,
                callback: async () => {
                    const { default: NotFoundView } = await import('./view/wrapper/main/not-found/not-found');
                    this.setContent(Pages.NOT_FOUND, new NotFoundView());
                },
            },
        ];
    }

    /**
     *
     * @param {Page.name} pageName
     * @param {View} view
     */
    setContent(pageName, view) {
        this.wrapper.getHeaderView().setSelectedItem(pageName);
        this.wrapper.getMainView().setContent(view);
    }
}
