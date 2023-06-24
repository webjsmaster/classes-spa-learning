import ElementCreator from '../../../util/element-creator';
import View from '../../view';
import './footer.css';

const CssClasses = {
    FOOTER: 'footer',
    CONTENT: 'footer__content'
};

const TEXT = 'SPA example app';

export default class FooterView extends View {
    /**
     * @type {import('../../../util/element-creator').ElementParams} params
     */
    constructor() {
        const params = {
            tag: 'footer',
            classNames: [CssClasses.FOOTER],
            textContent: '',
            callback: null,
        };
        super(params);
        this.configureView(params);
    }

    configureView() {
        const paramsDiv = {
            tag: 'div',
            classNames: [CssClasses.CONTENT],
            textContent: TEXT,
            callback: null,
        };

        const footer = new ElementCreator(paramsDiv);
        this.elementCreator.createContainer();
        this.elementCreator.addInnerElement(footer);
    }

}
