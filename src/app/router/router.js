import HashHandler from './handler/hash/hash-handler';
import HistoryHandler from './handler/history/history-handler';
import { Pages, ID_SELECTOR } from './pages';

/**
 * @typedef {{path: string, callback: Function}} Route
 */
export default class Router {
    /**
     * @param {Array<Route>} routes
     */
    constructor(routes) {
        this.routes = routes;

        this.handler = new HistoryHandler(this.urlChangedHandler.bind(this));

        document.addEventListener('DOMContentLoaded', () => {
            this.handler.navigate(null);
        });
    }

    setHashHandler() {
        this.handler.disable();
        this.handler = new HashHandler(this.urlChangedHandler.bind(this));
    }

    /**
     * @param {string} url
     */
    navigate(url) {
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
