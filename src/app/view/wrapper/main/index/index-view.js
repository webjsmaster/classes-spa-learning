import './index.css';
import View from '../../../view.js';
import InputFieldCreator from '../../../../util/input-field/input-field-creator.js';

const CssClasses = {
    INDEX: 'index',
};

const FIELD_TEXT_ONE = 'Поле для ввода 1';
const FIELD_TEXT_TWO = 'Поле для ввода 2';

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
            textContent: FIELD_TEXT_ONE,
            attribute: [{ type: 'text' }, { name: 'firstInput' }],
            callback: (event) => this.keyupHandler(event, 'firstInput'),
        };

        let inputCreator = new InputFieldCreator(paramsInput);
        inputCreator.setValue(this.state.getValue('firstInput'));
        this.elementCreator.addInnerElement(inputCreator.getElement());

        paramsInput = {
            tag: 'input',
            classNames: [],
            textContent: FIELD_TEXT_TWO,
            attribute: [{ type: 'text' }, { name: 'secondInput' }],
            callback: (event) => this.keyupHandler(event, 'secondInput'),
        };

        inputCreator = new InputFieldCreator(paramsInput);
        inputCreator.setValue(this.state.getValue('secondInput'));
        this.elementCreator.addInnerElement(inputCreator.getElement());
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
}
