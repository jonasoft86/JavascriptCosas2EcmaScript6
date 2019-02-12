const Instructor = require('./Instructor');
const Student = require('./Student');

const userFactory = (type,name,position, earnings=0, level= 'Beginner')=>{
    if(type === 'instructor'){
        return new Instructor(type,name,position, earnings);
    }
    else{
        return new Student(type,name,level);
    }
}

module.exports = userFactory;