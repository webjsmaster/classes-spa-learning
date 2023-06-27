import { Pages, ID_SELECTOR } from './pages.js';

/**
 * @typedef {{path: string, callback: Function}} Route
 */
export default class Router {
    /**
     *
     * @param {Array<Route>} routes
     */
    constructor(routes) {
        this.routes = routes;

        document.addEventListener('DOMContentLoaded', () => {
            const path = this.getCurrentPath();
            this.navigate(path);
        });

        window.addEventListener('hashchange', this.browserChangeHandler.bind(this));
        window.addEventListener('popstate', this.browserChangeHandler.bind(this));
    }

    /**
     * @param {string} url
     */
    navigate(url) {
        const request = this.parseUrl(url);
        const pathForFind = request.resource === '' ? request.path : `${request.path}/${ID_SELECTOR}`;

        const route = this.routes.find((item) => item.path === pathForFind);

        if (!route) {
            this.redirectToNotFound();
            return;
        }

        route.callback(request.resource);
    }

    /**
     * @typedef {{path: string, resource: string}} UserRequest
     * @param {string} url
     * @return {UserRequest}
     */
    parseUrl(url) {
        const result = {};
        [result.path = '', result.resource = ''] = url.split('/');
        return result;
    }

    redirectToNotFound() {
        const routeNotFound = this.routes.find((item) => item.path === Pages.NOT_FOUND);
        if (routeNotFound) {
            this.navigate(routeNotFound.path);
        }
    }

    browserChangeHandler() {
        const path = this.getCurrentPath();
        this.navigate(path);
    }

    /**
     * @return {string}
     */
    getCurrentPath() {
        console.log('🤡 ===>>> 🌜')
        if (window.location.hash) {
            return window.location.hash.slice(1);
        }
        return window.location.pathname.slice(1);
    }
}
