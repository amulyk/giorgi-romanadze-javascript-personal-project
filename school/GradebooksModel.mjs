import {
    validate
} from './validate';


export class GradebooksModel{

    constructor(groups, teachers, lms)
    {
        this.gradebook = new Map();
        this.mainbook = [];
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
        this.id = "";
    }
}
