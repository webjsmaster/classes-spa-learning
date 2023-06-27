import View from '../../../../view.js';
import ElementCreator from '../../../../../util/element-creator.js';
import './card.css';
import { Pages } from '../../../../../router/pages.js';

const CssClasses = {
    CARD: 'card',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};

const CARD_TEXT_MORE = 'Подробнее...';

export default class CardView extends View {
    /**
     * @param {CardInfo} card
     * @param {Router} router
     */
    constructor(card, router) {
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

        this.card = card;
        this.router = router;
        this.htmlElement = this.configureView(card);
    }

    /**
     * @param {CardInfo} card
     */
    configureView(card) {
        const paramsLabel = {
            tag: 'label',
            classNames: [CssClasses.FIELD],
            textContent: card.name,
            callback: null,
        };
        const labelCreator = new ElementCreator(paramsLabel);

        const paramsButton = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: CARD_TEXT_MORE,
            callback: this.buttonClickHandler.bind(this, `${Pages.PRODUCT}/${this.card.id}`),
        };
        const buttonCreator = new ElementCreator(paramsButton);

        this.elementCreator.addInnerElement(labelCreator);
        this.elementCreator.addInnerElement(buttonCreator);
    }

    buttonClickHandler(url) {
        this.router.navigate(url);
    }
}
