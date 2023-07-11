/**
 * @typedef {{
 * tag: string,
 * classNames: Array<string>,
 * textContent: string,
 * callback: Function,
 * attribute?: Array<{}>,
 * }} ElementParams
 */
export default class ElementCreator {
    /**
     * @param {ElementParams} param
     */
    constructor(param) {
        this.element = null;
        this.createElement(param);
    }

    /**
     * @param {ElementParams} param
     */
    createElement(param) {
        this.element = document.createElement(param.tag);
        this.setCssClasses(param.classNames);
        this.setTextContent(param.textContent);
        this.setCallback(param.callback);
    }

    createContainer() {
        const container = document.createElement('div');
        container.classList.add(`${this.element.className}__container`);
        this.element.append(container);
    }

    /**
     * @param {HTMLElement | ElementCreator} element
     */
    addInnerElement(element) {
        const container = this.element.querySelector(`.${this.element.className}__container`);

        if (element instanceof ElementCreator) {
            if (container) {
                container.append(element.getElement());
            } else {
                this.element.append(element.getElement());
            }
        } else if (container) {
            container.append(element);
        } else {
            this.element.append(element);
        }
    }

    /**
     * @returns {HTMLElement}
     */
    getElement() {
        return this.element;
    }

    /**
     * @param cssClasses
     * @param{Array<string>} cssClasses
     */
    setCssClasses(cssClasses) {
        cssClasses.forEach((className) => this.element.classList.add(className));
    }

    /**
     * @param {string}text
     */

    setTextContent(text) {
        this.element.textContent = text;
    }

    /**
     * @param {Function} callback
     */
    setCallback(callback) {
        if (typeof callback === 'function') {
            this.element.addEventListener('click', (e) => callback(e));
        }
    }
}
