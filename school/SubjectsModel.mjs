class SubjectsModel {
  constructor(objects) {

    this.validation(objects)
    this.title = objects.title
    this.lessons = objects.lessons
    this.description = objects.description

    this.id = objects.id = Math.floor(Math.random() * 200000)
    console.log(objects)
  }

  validation(elem) {
    if (elem.title == 'undefined') {
      throw new Error(`This ${elem} title is wrong !`)
    }
  }
}




// const history = new SubjectsModel({
//   title: 'History',
//   lessons: 24
// });


// const mathe = new SubjectsModel({
//   title: 'mathematics',
//   lessons: 21
// });


// // will return subjectId
// // console.log(mathe.id)

// (async () => {
//   const lms = new LMSModel();
//   await lms.remove(history);
//   await lms.add(history);
//   await lms.add(mathe);
//   // will return true or false. Answer will be true if we added this subject to lms
//   // await lms.verify(history);

//   // will return array of registered subjects
//   await lms.readAll();
//   // [
//   //   {
//   //     subjectId: null
//   //   }
//   // ]

// })()
