import View from '../../../../view.js';
import ElementCreator from '../../../../../util/element-creator.js';

const CssClasses = {
    CARD: 'card',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};

const CARD_TEXT_MORE = 'Подробнее...';

export default class CardView extends View {
    /**
     * @param {CardInfo} card
     */
    constructor(card) {
        /**
         * @type {ElementParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.CARD],
            textContent: '',
            callback: null,
        };
        super(params);

        this.configureView(card);
    }

    /**
     * @param {CardInfo} card
     */
    configureView(card) {
        const paramsLabel = {
            tag: 'label',
            classNames: [CssClasses.CARD],
            textContent: card.name,
            callback: null,
        };
        const labelCreator = new ElementCreator(paramsLabel);

        const paramsButton = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: CARD_TEXT_MORE,
            callback: null,
        };
        const buttonCreator = new ElementCreator(paramsButton);

        this.elementCreator.addInnerElement(labelCreator);
        this.elementCreator.addInnerElement(buttonCreator);
    }
}
