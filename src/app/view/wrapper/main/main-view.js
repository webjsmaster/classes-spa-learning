import ElementCreator from '../../../util/element-creator.js';
import View from '../../view.js';
import './main.css';

const CssClasses = {
    MAIN: 'main',
    CONTENT: 'main__content',
};

export default class MainView extends View {
    constructor() {
        /**
         * @type {import('../../../util/element-creator.js').default} params
         */
        const params = {
            tag: 'main',
            classNames: [CssClasses.MAIN],
            textContent: '',
            callback: null,
        };
        super(params);
        this.configureView();
    }

    configureView() {
        const paramsDiv = {
            tag: 'div',
            classNames: [CssClasses.CONTENT],
            textContent: '',
            callback: null,
        };

        const creator = new ElementCreator(paramsDiv);
        this.elementCreator.createContainer();
        this.elementCreator.addInnerElement(creator);
    }

    /**
     * @param { View } view
     */
    setContent(view) {
        const element = view.getHtmlElement();
        const currentElement = this.elementCreator.getElement();

        while (currentElement.firstElementChild) {
            currentElement.firstElementChild.remove();
        }

        this.elementCreator.createContainer();
        this.elementCreator.addInnerElement(element);
    }
}
