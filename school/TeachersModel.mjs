export class TeachersModel {
    constructor() {
        this.teachers = new Map();
    }

    add(teacher) {

    }
    read(id) {
        if (this.teachers.get(id) == 'undefined')
            return null;
        const teacher = this.teachers.get(id);
        const obj = { id, ...teacher }
        return obj;
    }
    update(id, teacher) {
        // console.log(id)
        // console.log(teacher)
        this.teachers.set(id, teacher);

        return true;

    }
    remove(id) {

    }


}
