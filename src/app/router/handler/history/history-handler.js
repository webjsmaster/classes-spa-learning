import HandlerRouter from '../handler';

export default class HistoryRouterHandler extends HandlerRouter {
    /**
     * @param {function} callbackRouter
     */
    constructor(callbackRouter) {
        const handlerParams = {
            nameEvent: 'popstate',
            locationField: 'pathname',
            callback: callbackRouter,
        };
        super(handlerParams);

        window.addEventListener('popstate', this.navigate.bind(this));
        window.removeEventListener('hashchange', this.navigate.bind(this));
    }
}