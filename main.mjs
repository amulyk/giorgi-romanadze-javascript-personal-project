import {
  SubjectsModel,
  LMSModel,
  TeachersModel,
  PupilsModel,
  GroupsModel,
  GradebooksModel,
} from './school';


(async () => {

  /*
      SubjectModel & LMSModel starts here
      Version: 1.0.9
  */

  const history = new SubjectsModel({
      title: 'History',
      lessons: 24,
      description: 'Some text'
  });

  const mathe = new SubjectsModel({
      title: 'mathematics',
      lessons: 22,
      description: 'I love math !'
  });

  var historyid = history.id
  console.log(historyid)
  const lms = new LMSModel();
  await lms.add(history);
  await lms.add(mathe);
  await lms.verify(history);
  await lms.remove(history);
  console.log(await lms.readAll());


  /*
      TeachersModel starts here
      Version: 2.8.4
  */

  var teacherObj = {
      "name": {
          "first": 'Giorgi',
          "last": "Romanadze"
      },
      "image": "image",
      "dateOfBirth": "03/03/1970",
      "emails": [{
          "email": "gromanadze@gmail.com",
          "primary": true
      }],
      "phones": [{
          "phone": "555131313",
          "primary": true
      }],
      "sex": "male",
      "subjects": [{
          "subject": "Mathematics"
      }],
      "description": "Test desc",
  };


  var teacherSecondObject = {
      "name": {
          "first": 'Ana',
          "last": "Gogitidze"
      },
      "image": "image",
      "dateOfBirth": "03/02/1980",
      "emails": [{
          "email": "anamaria13@gmail.com",
          "primary": true
      }],
      "phones": [{
              "phone": "555131231",
              "primary": true
          },
          {
              "phone": "555145412",
              "primary": false
          }
      ],
      "sex": "female"
  };

  var obj = {
      "name": {
          "first": 'Niko',
          "last": "Meladze"
      },
      "phones": [{
              "phone": "555141515",
              "primary": false
          },
          {
              "phone": "555181815",
              "primary": true
          }
      ],
  }


  const teacher = new TeachersModel();
  var teacherid = await teacher.add(teacherObj);
  await teacher.update(teacherid, obj)
  await teacher.read(teacherid)
  var teacherid = await teacher.add(teacherObj);
  var result = await teacher.read(teacherid);
  var update = await teacher.update(teacherid, teacherSecondObject);
  result = await teacher.read(teacherid);
  var deletedteacher = await teacher.remove(teacherid);



  /*
      PupilModel starts here
      Version: 1.0.9
  */

  var pupil1 = {
      "name": {
          "first": "Pitter",
          "last": "Black"
      },
      "image": "string",
      "dateOfBirth": "string",
      "phones": [{
          "phone": "string",
          "primary": true
      }],
      "sex": 'male',
      "description": "A Good pupil",
  }

  var pupil2 = {
      "name": {
          "first": "Changed",
          "last": "To this"
      },
      "image": "string",
      "dateOfBirth": "string",
      "phones": [{
          "phone": "string",
          "primary": true
      }],
      "sex": 'male',
      "description": "A Good pupil",
  }

  const pupils = new PupilsModel();
  var pupilid = await pupils.add(pupil1);
  var result = await pupils.read(pupilid);
  var update = await pupils.update(pupilid, pupil2);
  result = await pupils.read(pupilid);
  var deletedpupils = await pupils.remove(pupilid);
})();