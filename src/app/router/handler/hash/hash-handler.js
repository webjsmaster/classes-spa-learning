import HandlerRouter from '../handler';

export default class HashHandler extends HandlerRouter {
    /**
     * @param {Function} callbackRouter
     */
    constructor(callbackRouter) {
        const handlerParams = {
            nameEvent: 'hashchange',
            locationField: 'hash',
            callback: callbackRouter,
        };
        super(handlerParams);

        window.addEventListener('hashchange', this.navigate.bind(this));
    }
}
