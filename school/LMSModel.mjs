export class LMSModel {
    constructor() {
        this.db = new Set();
    }

    async add(elem) {
        
        this.validator(elem);
        this.db.add(elem.elem);
    }

    async validator(elem) {

        if (typeof elem.elem.title !== 'string')
            throw new TypeError('title should be string');

        if (typeof elem.elem.lessons !== 'number')
            throw new TypeError('lessons should be number');
    }

    async verify(elem) {

        if (elem == 'undefined') {
            throw new Error("The elem is empty")
        }

        if (this.db.has(elem.elem)) {
            return this.db.has(elem.elem);
        }

        else {
            return false
        }
    }

    async remove(elem) {
        if (!this.db.has(elem.elem)) {
            throw new Error("We can't found the elements")
        }

        if (this.db.has(elem.elem)) {
            return this.db.delete(elem.elem);
        }
    }

    async readAll() {
        let elem = this.db
        if (typeof elem == 'undefined') {
            throw new Error("Oopps,here is something wrong...")
        }

        return [...elem]
    }
}