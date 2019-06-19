import {
  validate
} from './validate';
export class PupilsModel {
  constructor() {
      this.pupils = new Map();
      this.schema = {
          "name": {
              "first": "string",
              "last": "string"
          },
          "image": "string",
          "dateOfBirth": "string",
          "phones": [{
              "phone": "string",
              "primary": "boolean"
          }],
          "sex": "string",
          "description": "string"
      }
  }
  async add(pupil) {
      if (validate(this.schema, pupil)) {
          let id = Math.ceil(Math.random() * 100000000000);
          this.pupils.set(id, pupil);
          return id;
      } else {
          throw new Error('Oops,here is some problem.We can not add this item !');
      }
  }


  async read(id) {
      if (typeof id !== 'number' || this.pupils.get(id) == 'undefined')
          throw new TypeError('Oops,here is some problem.We can not read this item !')
      else {
          var pupils = this.pupils.get(id);
          var obj = {
              id,
              ...pupils
          }
          return (obj);
      }
  }

  async update(currentID, obj) {
      if (this.pupils.get(currentID) == null)
          throw new TypeError('Oops,here is some problem.We can not update this item !');
      else {
          // Update coming soon
      }
  }

  async remove(id) {
      if (this.pupils.get(id) == null)
          throw new TypeError('Oops,here is some problem.We can not find this id !');
      else {
          this.pupils.delete(id);
          return this.pupils.delete(id)
      }
  }
}