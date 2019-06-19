import {validate} from './validate';
export class TeachersModel {
    constructor(){
        this.teachers = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string",
            "emails": [
              {
                "email": "string",
                "primary": "boolean"
              }
            ],
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", 
            "subjects": [
              {
                "subject": "string"
              }
            ],
            "description": "string",
          }
    }

    async add (teacher)
    {
      if (validate (this.schema , teacher))
      {
          let id = Math.ceil(Math.random()*100000000000);
          this.teachers.set(id, teacher);
          return id;
      }
      else throw new TypeError('Oops,here is some problem...')
    }
    
    async read (id)
    {
      if (typeof id !== 'number' || this.teachers.get(id) == 'undefined')
          throw new TypeError('Oops,here is some problem. Please enter correct id.')
      else {
          var teacher = this.teachers.get(id);
          var obj = { id , ...teacher }
          return obj ; 
      }
    }
    async remove(id)
    {
        if ( this.teachers.get(id) == null)
          throw new TypeError('Oops,here is some problem.We can not remove this item !');
        else
          return this.teachers.delete(id) ;

    }

    async update (currentID , obj )
    {
        if ( this.teachers.get(currentID) == null)
          throw new TypeError('Oops,here is some problem.We can not update this item !');
        else
        {
          // Update Code,coming soon.
        }
    }


}


