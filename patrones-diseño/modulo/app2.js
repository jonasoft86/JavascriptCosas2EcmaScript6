class Course{
    constructor(title,author){
        this.title = title;
        this.author = author;
    }

    toString(){
        return console.log(this.title + "Autor del curso: " + this.author);
    }
}

const course = new Course("Bostrap 4: Profesional Dev","Jhon");
course.toString();