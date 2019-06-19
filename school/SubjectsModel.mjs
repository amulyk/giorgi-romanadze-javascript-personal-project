export class SubjectsModel {
    constructor(subject) {
        this.id = Math.ceil(Math.random() * 100000000000);
        var title = subject.title;
        var lessons = subject.lessons;
        var description = subject.description
        this.subject = {
            title,
            lessons,
            description
        }
    }

}