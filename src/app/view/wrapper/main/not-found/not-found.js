import './not-found.css';
import View from '../../../view.js';

const CssClasses = {
    NOT_FOUND: 'not-found',
};

const TEXT_NOT_FOUND = 'Ошибка. Страница не найдена...';

export default class NotFoundView extends View {
    constructor() {
        /**
         * @type {ViewParams}
         */
        const params = {
            tag: 'a',
            classNames: [CssClasses.NOT_FOUND],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        this.elementCreator.setTextContent(TEXT_NOT_FOUND);
    }
}
