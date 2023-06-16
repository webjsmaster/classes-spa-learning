import '../../style.css';
import WrapperView from './view/wrapper/wrapper-view';
import Router from './router/router.js';
import { ID_SELECTOR, Pages } from './router/pages.js';
import IndexView from './view/wrapper/main/index/index-view.js';
import ProductView from './view/wrapper/main/prodicts/product-view.js';
import NotFoundView from './view/wrapper/main/not-found/not-found.js';

export default class App {
    constructor() {
        this.wrapper = null;
        this.router = new Router(this.createRoutes());
        this.createView();
    }

    createView() {
        this.wrapper = new WrapperView(this.router);

        document.body.append(
            this.wrapper.getHtmlElement(),
        );
    }

    /**
     * @return {Array<Route>}
     */
    createRoutes() {
        return [
            {
                path: '',
                callback: () => {
                    this.setContent(Pages.INDEX, new IndexView());
                },
            },
            {
                path: `${Pages.INDEX}`,
                callback: () => {
                    this.setContent(Pages.PRODUCT, new ProductView());
                },
            },
            {
                path: `${Pages.PRODUCT}/${ID_SELECTOR}`,
                callback: (id) => {
                    this.setContent(Pages.PRODUCT, new ProductView(id));
                },
            },
            {
                path: `${Pages.NOT_FOUND}`,
                callback: () => {
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
