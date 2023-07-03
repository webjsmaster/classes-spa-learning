import View from '../../../view.js';
import CardView from './card/card-view.js';
import { cardsInfo } from '../../../../../data/cards.js';
import './products.css';
import CardDetailView from './card-detail/card-detail-view.js';

const CssClasses = {
    PRODUCT: 'product',
};

const baseAddress = 'https://fakestoreapi.com/products';

export default class ProductView extends View {
    /**
     * @param {Router} router
     * @param {string} id
     */
    constructor(router, id = '') {
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

        if (id) {
            this.addLargeCardToView(router, id);
        } else {
            this.addSmallCardsToView(router);
        }
    }

    /**
     * @param {Router} router
     */
    async addSmallCardsToView(router) {
        // cardsInfo.forEach((card) => {
        //     const smallCardComponent = new CardView(card, router);
        //     this.elementCreator.addInnerElement(smallCardComponent.getHtmlElement());
        // });

        const products = await this.getProducts();

        products.forEach((card) => {
            const smallCardComponent = new CardView(card, router);
            this.elementCreator.addInnerElement(smallCardComponent.getHtmlElement());
        });

        console.log('🧬:PRODUCTS', products);
    }

    /**
     * @param {Router} router
     * @param {string} id
     */
    addLargeCardToView(router, id) {
        fetch(`${baseAddress}/${id}`)
            .then((res) => res.json())
            .then((json) => console.log(json));
        const selectedCard = cardsInfo.find((card) => card.id === id);
        const largeCardComponent = new CardDetailView(selectedCard, router);
        this.elementCreator.addInnerElement(largeCardComponent.getHtmlElement());
    }

    async getProducts() {
        const response = await fetch(baseAddress);
        if (response.ok) {
            return response.json();
        }
        return [];
    }
}
