import {
  PupilsModel,
  GroupsModel,
  GradebooksModel,
  SubjectsModel,
  LMSModel,
  TeachersModel
} from './school';



/*
    SubjectModel & LMSModel starts here
    Version: 1.0.9
*/

const history = new SubjectsModel({
  title: 'History',
  lessons: 24
});

const mathe = new SubjectsModel({
  title: 'mathematics',
  lessons: 24,
  description: "I love mathe than another subjects !"
});

// will return subjectId
// You can activate this comments !
// console.log("This is subject id: " + history.id);
// console.log("This is subject id: " + mathe.id);

(async () => {
  const lmsDb = new LMSModel();
  // await lms.remove(history);
  await lmsDb.add(history);
  await lmsDb.add(mathe);
  // will return true or false. Answer will be true if we added this subject to lms

  // console.log(await lmsDb.verify(mathe));

  // will return array of registered subjects

  // console.log(await lmsDb.readAll())
})()




/*
    TeachersModel starts here
    Version: 1.0.6
*/

const teacherList = {
  "name": {
    "first": "Giorgi",
    "last": "Romanadze"
  },

  "image": "string",
  "dateOfBirth": "23/01/1990", // format date
  "emails": [
    {
      "email": "gromanadze@gmail.com",
      "primary": false
    }
  ],

  "phones": [
    {
      "phone": "555506070",
      "primary": true
    }
  ],

  "sex": "male", // male or female
  "subjects": [
    {
      "subject": "Mathe"
    }
  ],

  "description": "This is a simple description",
};


const updatedTeacherList = {
  "name": {
    "first": "Nika",
    "last": "Ananidze"
  },

  "sex": "famele", 
  "emails": [
    {
      "email": "gromanadze@gmail.com",
      "primary": true
    },
    {
      "email": "test@gmail.com",
      "primary": true
    }
  ]
};


// Create instance and read from object
const teacher = new TeachersModel();
var teacherid = teacher.add(teacherList);
var getObject = teacher.read(teacherid);

// console.log(getObject);


// Update & remove checking
const remover = teacher.remove(teacherid);

// Deleted ? return TRUE
// console.log(remover)

const update = teacher.update(teacherList, updatedTeacherList);
// const result = teacher.read(teacherList);
console.log(teacherList);
// console.log(result);