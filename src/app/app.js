import '../../style.css';
import WrapperView from './view/wrapper/wrapper-view';

export default class App {
    constructor() {
        this.createView();
    }

    createView() {
        const wrapper = new WrapperView();

        document.body.append(
            wrapper.getHtmlElement(),
        );
    }
}
