import './input-field.css';
import ElementCreator from '../element-creator.js';

const InputFieldCssClasses = {
    CONTAINER: 'field',
    CONTAINER_REVERSE: 'field_revers',
};

export default class InputFieldCreator extends ElementCreator {
    /**
     * @param param
     * @example
     */
    createElement(param) {
        this.element = document.createElement('div');
        this.element.classList.add(InputFieldCssClasses.CONTAINER);
        param.classNames.forEach((name) => {
            this.element.classList.add(name);
        });

        this.setCallback(param.callback);

        this.inputElement = document.createElement('input');
        this.labelElement = document.createElement('label');

        this.setTextContent(param.textContent);

        this.element.append(this.labelElement, this.inputElement);
    }

    setTextContent(text) {
        this.labelElement.textContent = text;
    }

    /**
     * @param callback
     * @example
     */
    setCallback(callback) {
        if (typeof callback === 'function') {
            this.element.addEventListener('keyup', (e) => callback(e));
        }
    }
}