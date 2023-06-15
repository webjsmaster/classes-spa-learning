import View from '../../view';
import './footer.css';

const CssClasses = {
    FOOTER: 'footer',
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
            textContent: TEXT,
            callback: null,
        };
        super(params);
    }
}
