import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    // GroupsModel,
    // GradebooksModel
} from './school';

const history = new SubjectsModel({
    title: 'History',
    lessons: 24
});

const maths = new SubjectsModel({
    title: 'Maths',
    lessons: 20
});

// console.log(history.id);
// console.log(maths.id);


(async () => {
    const lms = new LMSModel();
    // console.log(await lms.remove(history));
    // console.log(await lms.add(history));
    // console.log(await lms.add(maths));
    // console.log(await lms.readAll());


})();