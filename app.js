// main module

// function sayHello(name) {
//  console.log('Hello ' + name);
//}
// sayHello('Kathy');

const log = require('./logger');

// console.log(logger);
log('message');

// const path = require('node:path');
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);