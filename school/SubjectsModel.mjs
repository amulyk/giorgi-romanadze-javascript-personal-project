export class SubjectsModel {
  constructor(elem) {

    this.id = Math.floor(Math.random() * 1000000000);
    let title = elem.title;
    let lessons = elem.lessons;
    let description = elem.description;

    if (typeof description == 'undefined') {
      description = null;
    }

    this.elem = {
      title, lessons, description
    }
  }
}