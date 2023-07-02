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
        const urlString = url || window.location[this.params.locationField].slice(1);

        console.log('⛔:Hash не работает', url);

        /**
         * @type {RequestParams}
         */
        const result = {};
        [result.path = '', result.resource = ''] = urlString.split('/');

        this.params.callback(result);
    }
}
