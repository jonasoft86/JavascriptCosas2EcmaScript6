/*
Un Observer es un componente el cual lo único que hace es estar atento a los eventos que el Target realiza,
 Cuando Target realiza un cambio o evento este notifica a todos los Observers que están registrados.
 De esta manera las clases observer serán notificadas del evento que realizo el Target.
*/

const Shopper = require('./Shopper');
const Category = require('./Category');
const Sales = require('./Sales');

const desigCategory = new Category('Design Category');
const webCategory = new Category('Web Dev Category');
const pdCategory = new Category('Personal Dev Category');

const paul = new Shopper('Paul');
const mike = new Shopper('Mike');
const jhon = new Shopper('Jhon');
const alex = new Shopper('Alex');

const blackfriday = new Sales();

desigCategory.subscribe(blackfriday);
webCategory.subscribe(blackfriday);
pdCategory.subscribe(blackfriday);

desigCategory.subscribe(paul);
desigCategory.subscribe(mike);
desigCategory.subscribe(jhon);

webCategory.subscribe(mike);
pdCategory.subscribe(alex);

desigCategory.sale(20);
webCategory.sale(15);
pdCategory.sale(50);

console.log(blackfriday.sales);