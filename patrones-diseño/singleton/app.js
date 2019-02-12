var a = require('./singleton');

console.log(a.getCounter());
a.increment();

var b = require('./singleton');

console.log(b.getCounter());
b.increment();