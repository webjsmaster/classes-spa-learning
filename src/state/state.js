export default class State {
    constructor() {
        this.fields = new Map();
    }

    /**
     *
     * @param {string} name
     * @param {string} value
     */
    setValue(name, value) {
        this.fields.set(name, value);
    }

    /**
     *
     * @param {string} name
     */
    getValue(name) {
        return this.fields.get(name);
    }
}
