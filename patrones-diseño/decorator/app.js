/*
El patrón decorator permite añadir responsabilidades a objetos concretos de forma dinámica.
Los decoradores ofrecen una alternativa más flexible que la herencia para extender las funcionalidades.

Este patrón se debe utilizar cuando:
Hay una necesidad de extender la funcionalidad de una clase, pero no hay razones para extenderlo 
a través de la herencia.
Se quiere agregar o quitar dinámicamente la funcionalidad de un objeto.
*/

const {CourseBuilder, HotNew, BestSeller} = require('./CourseBuilder');

const course_1 = new CourseBuilder('Design Patterns 1').makePaid(100).makeCampain().build();

const HotNew_1 = new HotNew(course_1);
const BestSeller_1 = new BestSeller(HotNew_1);

course_1.toString(course_1);
course_1.toString(HotNew_1);
course_1.toString(BestSeller_1);