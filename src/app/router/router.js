import HashRouterHandler from './handler/hash/hash-handler';
import HistoryRouterHandler from './handler/history/history-handler';
import { ID_SELECTOR, Pages } from './pages';

/**
 * @typedef {{path: string, callback: Function}} Route
 */
export default class Router {
    /**
     * @param {Array<Route>} routes
     */
    constructor(routes) {
        this.routes = routes;

        this.handler = new HistoryRouterHandler(this.urlChangedHandler.bind(this));

        // this.handler = new HashRouterHandler(this.urlChangedHandler.bind(this));

        window.addEventListener('popstate', () => {
            console.log('🌻:', this.handler);
            this.handler = new HistoryRouterHandler(this.urlChangedHandler.bind(this));
        });

        window.addEventListener('hashchange', () => {
            this.handler = new HashRouterHandler(this.urlChangedHandler.bind(this));
        });

        document.addEventListener('DOMContentLoaded', () => {
            this.handler.navigate(null);
        });
    }

    setHashHandler() {
        console.log('🌻:setHashHandler');
        // this.handler.disable();
        // this.handler = new HashHandler(this.urlChangedHandler.bind(this));
    }

    /**
     * @param {string} url
     */
    navigate(url) {
        console.log('🌻:NAVIGATE-ROUTER', url);
        this.handler.navigate(url);
    }

    /**
     * @param {import('./handler/history-router-handler.js').RequestParams} requestParams
     */
    urlChangedHandler(requestParams) {
        const pathForFind = requestParams.resource === '' ? requestParams.path : `${requestParams.path}/${ID_SELECTOR}`;
        const route = this.routes.find((item) => item.path === pathForFind);

        if (!route) {
            this.redirectToNotFoundPage();
            return;
        }

        route.callback(requestParams.resource);
    }

    redirectToNotFoundPage() {
        const notFoundPage = this.routes.find((item) => item.path === Pages.NOT_FOUND);
        if (notFoundPage) {
            this.navigate(notFoundPage.path);
        }
    }
}
