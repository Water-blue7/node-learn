// 1. 导入fs模块
const fs = require('fs');

//相对路径 参照物不是js文件所在目录，而是命令行所在目录
// fs.writeFileSync('./index.html', '<h1>hello index.html</h1>');
//绝对路径 
// fs.writeFileSync('D:/index.html', '<h1>hello index.html</h1>');
//不写盘符，默认本盘根目录
// fs.writeFileSync('/index.html', '<h1>hello index.html</h1>');

// js文件所在文件夹的绝对路径
console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html', '<h1>hello index.html</h1>');