import { Pages } from './pages.js';

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
    }

    /**
     * @param {string} url
     */
    navigate(url) {
        const request = this.parseUrl(url);
        const pathForFind = request.resource === '' ? request.path : `${request.path}/${request.resource}`;
        const route = this.routes.find((item) => item.path === pathForFind);

        if (!route) {
            this.redirectToNotFound();
            return;
        }

        route.callback();
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
}
