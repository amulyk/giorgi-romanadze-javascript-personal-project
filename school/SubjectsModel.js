// Every function must be return an PROMISE !!!

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


class LMSModel {
  constructor() {
    this.usersMap = new Map()
  }

  add(elems) {
    if (typeof elems !== 'object' && elems.lessons !== 'undefined' && elems.title !== 'undefined' && customElements.description !== 'string') {
      throw new Error("Parameter type is not object")
    }
    this.usersMap.set(elems.id, elems.title)
    // console.log(this.usersMap)
  }

  remove(elems) {
    if (typeof elems !== 'object' && elems.lessons !== 'undefined' && elems.title !== 'undefined' && customElements.description !== 'string') {
      throw new Error("Parameter type is not object")
    }
    this.usersMap.delete(elems.id)
  }

  verify(elems) {
    if (this.usersMap.has(elems.id)) {
      console.log(true)
    }
    else {
      console.log(false)
    }
  }

  readAll() {
    for (const v of this.usersMap) {
      // console.log(v)

      // const returnNewClass = new SubjectsModel(v);
      // returnNewClass.lessons = returnNewClass.lessons
      // console.log(returnNewClass)

    }

    // return new Promise(function(resolve,reject) {
      


    // }
    // )
  }


}



const history = new SubjectsModel({
  title: 'History',
  lessons: 24
});


const mathe = new SubjectsModel({
  title: 'mathematics',
  lessons: 21
});


// will return subjectId
// console.log(mathe.id)

(async () => {
  const lms = new LMSModel();
  await lms.remove(history);
  await lms.add(history);
  await lms.add(mathe);
  // will return true or false. Answer will be true if we added this subject to lms
  // await lms.verify(history);

  // will return array of registered subjects
  await lms.readAll();
  // [
  //   {
  //     subjectId: null
  //   }
  // ]

})()
