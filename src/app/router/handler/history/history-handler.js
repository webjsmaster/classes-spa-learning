import HandlerRouter from '../handler';

export default class HistoryHandler extends HandlerRouter {
    constructor(callbackRouter) {
        const handlerParams = {
            nameEvent: 'popstate',
            locationField: 'pathname',
            callback: callbackRouter,
        };
        super(handlerParams);

        window.addEventListener('popstate', this.navigate.bind(this));
    }
}
