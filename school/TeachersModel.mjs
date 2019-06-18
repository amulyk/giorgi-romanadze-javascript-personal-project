import { validate } from "./validator.mjs";

export class TeachersModel {

    constructor() {
        this.teachers = new Map();

        this.schema = {
            name: {
                first: {
                    type: "string",
                    requried: true
                }   
            }
 
        };

    }

    add(teacher) {
        if (typeof teacher !== 'object')
            throw new TypeError('`${teacher}` is not an object');
        if (typeof teacher.name !== 'object')
            throw new TypeError('Provide object for name')
        if (typeof teacher.name.first !== 'string')
            throw new TypeError('Provide string for first name')
        if (typeof teacher.name.last !== 'string')
            throw new TypeError('Provide string for last name')
        if (typeof teacher.image !== 'string')
            throw new TypeError('Provide string for image')
        if (typeof teacher.dateOfBirth !== 'string')
            throw new TypeError('Provide string for dateOfBirth')
        if (typeof teacher.emails !== 'object')
            throw new TypeError('Provide object for emails')
        for (let i = 0; i < teacher.emails.length; i++) {
            if (typeof teacher.emails[i].email !== 'string')
                throw new TypeError('Provide string for emails.email')
            if (typeof teacher.emails[i].primary !== 'boolean')
                throw new TypeError('Provide boolean for emails.primary')
        }
        if (typeof teacher.phones !== 'object')
            throw new TypeError('Provide object for phones')
        for (let i = 0; i < teacher.phones.length; i++) {
            if (typeof teacher.phones[0].phone !== 'string')
                throw new TypeError('Provide string for phones.phone')
            if (typeof teacher.phones[0].primary !== 'boolean')
                throw new TypeError('Provide boolean for phones.primary')
        }
        if (typeof teacher.sex !== 'string')
            throw new TypeError('Provide string for sex')
        if (!Array.isArray(teacher.subjects))
            throw new TypeError('Provide Array for subjects')
        for (let i = 0; i < teacher.subjects; i++) {
            if (typeof teacher.subjects.subject !== 'string')
                throw new TypeError('Provide string for subject')
        }
        if (teacher.description !== null && typeof teacher.description !== 'string')
            throw new TypeError('Provide string for description')

        // const id = () => { 
        //     return Math.floor(Math.random() * 1000000000) 
        // };

        var privateID = Math.floor(Math.random() * 1000000000);
        this.teachers.set(privateID, teacher);
        return privateID;
    }
    read(id) {
        if (this.teachers.get(id) == 'undefined')
            return null;
        var teacher = this.teachers.get(id);
        var obj = { id, ...teacher }
        return obj;
    }
    // update(id, teacher) {
    //     console.log(id)
    //     console.log(teacher)
    //     this.teachers.set(id, teacher);
    //     return true;

    // }

    update(obj1, obj2) {
        
        for (var p in obj2) {
            try {
                if (obj2[p].constructor == Object) {
                    console.log(this.schema(obj1[p]))
                    obj1[p] = update(obj1[p], obj2[p]);


                } else {
                    obj1[p] = obj2[p];

                }

            } catch (e) {
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }


    remove(id) {
        if (this.teachers.get(id) == void 0)
            throw new ReferenceError('Invalid Id');
        return this.teachers.delete(id);
    }


}
