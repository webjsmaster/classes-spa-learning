/**
 * @typedef {{path: string, resource: string}} RequestParams
 */

export default class HandlerRouter {
    /**
     * @typedef {{nameEvent: string, locationField: string, callback: Function}} RouterHandlerParam
     * @param {RouterHandlerParam} params
     */
    constructor(params) {
        this.params = params;
    }

    disable() {
        window.removeEventListener(this.params.nameEvent, this.params.callback.bind(this));
    }

    /**
     * @param {string} url
     */
    navigate(url) {
        console.log('🚀:', this.params);
        if (typeof url === 'string') {
            this.setHistory(url);
        }
        const urlString = window.location[this.params.locationField].slice(1);

        console.log('🚩:', urlString);

        /**
         * @type {RequestParams}
         */
        const result = {};
        const path = urlString.split('/');
        [result.path = '', result.resource = ''] = path;

        this.params.callback(result);
    }

    setHistory(url) {
        window.history.pushState(null, null, `/${url}`);
    }
}
