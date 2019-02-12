/*
El patrón de diseño Factory Method nos permite la creación de un subtipo determinado por medio de una 
clase de Factoría, la cual oculta los detalles de creación del objeto.

El objeto real creados es enmascarado detrás de una interface común 
entre todos los objetos que pueden ser creado, con la finalidad de que estos pueden 
variar sin afectar la forma en que el cliente interactúa con ellos. 

Es normal que un Factory pueda crear varios subtipos de una determinada interface y que todos los objetos 
concretos fabricados hagan una tarea similar pero con detalles de implementación diferentes. 

La intención del Factory Method es tener una clase a la cual delegar la responsabilidad de la 
creación de los objetos, para que no sea el mismo programador el que decida que clase instanciará, 
si no que delegará esta responsabilidad al Factory confiando en que este le regresará la clase adecuada 
para trabajar.
*/

const userFactory = require('./userFactory');

const paul = userFactory('instructor','Paul','Software engineer',1000);
const jhon = userFactory('student','Jhon','Junior Developer');

console.log(paul.toString());
console.log(jhon.toString());