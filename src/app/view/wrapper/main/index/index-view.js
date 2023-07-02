import './index.css';
import View from '../../../view.js';
import InputFieldCreator from '../../../../util/input-field/input-field-creator.js';
import ButtonView from './button/button-view';

const CssClasses = {
    INDEX: 'index',
};

const FIELD_TEXT = {
    ONE: 'Поле для ввода 1',
    TWO: 'Поле для ввода 2',
};

/**
 * @typedef {{
 *     ONE: string,
 *     TWO: string,
 * }} FieldsText
 */
export default class IndexView extends View {
    /**
     * @param {State} state
     */
    constructor(state) {
        /**
         * @type {ElementParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.INDEX],
            textContent: '',
            callback: null,
        };
        super(params);

        this.state = state;
        this.configureView();
    }

    configureView() {
        let paramsInput = {
            tag: 'input',
            classNames: [],
            textContent: FIELD_TEXT.ONE,
            attribute: [{ type: 'text' }, { name: FIELD_TEXT.ONE }],
            callback: (event) => this.keyupHandler(event, FIELD_TEXT.ONE),
        };

        let inputCreator = new InputFieldCreator(paramsInput);
        inputCreator.setValue(this.state.getValue(FIELD_TEXT.ONE));
        this.elementCreator.addInnerElement(inputCreator.getElement());

        paramsInput = {
            tag: 'input',
            classNames: [],
            textContent: FIELD_TEXT.TWO,
            attribute: [{ type: 'text' }, { name: FIELD_TEXT.TWO }],
            callback: (event) => this.keyupHandler(event, FIELD_TEXT.TWO),
        };

        inputCreator = new InputFieldCreator(paramsInput);
        inputCreator.setValue(this.state.getValue(FIELD_TEXT.TWO));
        this.elementCreator.addInnerElement(inputCreator.getElement());

        this.addButtonClear(this.state);
    }

    /**
     * @param {KeyboardEvent} event
     * @param {string} fieldName
     */
    keyupHandler(event, fieldName) {
        if (event.target instanceof HTMLInputElement) {
            this.state.setValue(fieldName, event.target.value);
        }
    }

    addButtonClear(state) {
        const buttonCreator = new ButtonView(state, FIELD_TEXT);
        this.elementCreator.addInnerElement(buttonCreator.getHtmlElement());
    }
}
