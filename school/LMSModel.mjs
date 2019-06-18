
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
        console.log(v)
  
        // const returnNewClass = new SubjectsModel(v);
        // returnNewClass.lessons = returnNewClass.lessons
        // console.log(returnNewClass)
  
      }
  
      // return new Promise(function(resolve,reject) {
        
  
  
      // }
      // )
    }
  
  
  }