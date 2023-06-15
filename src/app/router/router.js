/**
 * @typedef {{path: string, callback: Function}} Route
 */

export default class Router {
    /**
     *
     * @param {Array<Route>} routes
     */
    constructor(routes) {
        this.router = routes;
    }

    /**
     * @param {string} url
     */
    navigate(url) {

    }
}
