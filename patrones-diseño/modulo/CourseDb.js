const CourseDb = () =>{
    return {
        dbInfo: (course) => {
            console.log('Curso id: '+course.id+' ...Curso Titulo: '+course.title);
        }
    }
}

module.exports = CourseDb();