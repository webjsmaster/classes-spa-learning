import HistoryHandler from '../history/history-handler';

export default class HashHandler extends HistoryHandler {
    /**
     * @param {Function} callbackRouter
     */
    constructor(callbackRouter) {
        super(callbackRouter);
        /**
         * @type {import('../history-router-handler').RouterHandlerParam}
         */
        this.params = {
            nameEvent: 'hashchange',
            locationField: 'hash',
        };

        window.addEventListener(this.params.nameEvent, this.handler);
    }

    /**
     * @param {string} url
     */
    setHistory(url) {
        window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${url}`;
        // window.history.pushState(null, null, `/${url}`);
    }
}
