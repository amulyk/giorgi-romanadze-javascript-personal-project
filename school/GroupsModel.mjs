import {
    validate
} from './validate';

export class GroupsModel {
    constructor() {
        this.list = new Map();
        this.pupils = new Map();
        this.schema = {
            "id": "string",
            "room": "number"
        }
    }

    readAll() {
        let list = [...this.listlist]
        return (list);
    }

}