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

        /**
         * @type {RequestParams}
         */
        const result = {};
        const path = urlString.split('/');
        [result.path = '', result.resource = ''] = path;

        this.params.callback(result);
    }
}
