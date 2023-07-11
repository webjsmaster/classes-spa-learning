import HandlerRouter from '../handler';

export default class HashRouterHandler extends HandlerRouter {
    /**
     * @param {function} callbackRouter
     */
    constructor(callbackRouter) {
        const handlerParams = {
            nameEvent: 'hashchange',
            locationField: 'hash',
            callback: callbackRouter,
        };
        super(handlerParams);

        window.addEventListener('hashchange', this.navigate.bind(this));
        window.removeEventListener('popstate', this.navigate.bind(this));
    }
}