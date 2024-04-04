// 如果导入的是个文件夹，首先到对应的文件夹下找package.json文件中的main属性对应的文件，如果存在则导入，如果不存在则报错
// 如果main属性或者package.json不存在，则会尝试导入文件夹下的index.js和index.json，如果都没有就报错
const m = require('./module');

console.log(m);