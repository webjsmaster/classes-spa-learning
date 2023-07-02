import View from '../../../../view';
import './button.css';

const CssClasses = {
    BUTTON: 'index__button',
};

export default class ButtonView extends View {
    /**
     *
     * @param {import('./../../../../../../state/state').default} state
     * @param {import('./../index-view').FieldsText} fields
     */
    constructor(state, fields) {
        /**
         * @type {import('./../../../../../util/element-creator').ElementParams} params
         */
        const params = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: 'Clear',
            callback: () => this.handlerButton(state, fields),
        };
        super(params);
    }

    /**
     *
     * @param {import('./../../../../../../state/state').default} state
     * @param {import('./../index-view').FieldsText} fields
     */
    handlerButton(state, fields) {
        Object.keys(fields).forEach((key) => {
            state.setValue(fields[key], '');
        });
    }
}
