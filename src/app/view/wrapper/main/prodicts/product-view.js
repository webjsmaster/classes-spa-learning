import View from '../../../view.js';
import CardView from './card/card-view.js';
import { cardsInfo } from '../../../../../data/cards.js';

const CssClasses = {
    PRODUCT: 'product',
};

export default class ProductView extends View {
    constructor() {
        /**
         * @type {ElementParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.PRODUCT],
            textContent: '',
            callback: null,
        };
        super(params);

        this.configureView();
    }

    configureView() {
        cardsInfo.forEach((card) => {
            const cardView = new CardView(card);
            this.elementCreator.addInnerElement(cardView.getHtmlElement());
        });
    }
}
