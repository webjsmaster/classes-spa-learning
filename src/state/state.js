const KEY_FOR_SAVE = 'spaApp';

export default class State {
    constructor() {
        this.fields = this.leadState();
        window.addEventListener('beforeunload', this.saveState.bind(this));
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
        if (this.fields.has(name)) {
            return this.fields.get(name);
        }
        return '';
    }

    saveState() {
        const fields = Object.fromEntries(this.fields.entries());
        localStorage.setItem(KEY_FOR_SAVE, JSON.stringify(fields));
    }

    /**
     * @return {Map}
     */
    leadState() {
        const fields = localStorage.getItem(KEY_FOR_SAVE);
        if (fields) {
            const fieldArray = JSON.parse(fields);
            return new Map(Object.entries(fieldArray));
        }
        return new Map();
    }
}
