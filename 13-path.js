// 1. 导入fs模块
const fs = require('fs');

// fs.writeFileSync(__dirname + '/dir/index.html', 'love');
// console.log(__dirname + '/dir/index.html');
// 输出结果如下，可以看到路径分隔符后半段是/前半段是\
// D:\Git\PortableGit\github\node-learn/dir/index.html


// 2. 导入path模块
const path = require('path');

// resolve      不写./也是相对路径      如果以/开始，就成了D:\dir\index.html
console.log(path.resolve(__dirname,'./dir/index.html'));
console.log(path.resolve(__dirname,'/dir/index.html'));
// 输出结果如下，可以看到路径分隔符都是\
// D:\Git\PortableGit\github\node-learn\dir\index.html

// sep 获取操作系统的分隔符，win:\ Linux:/
console.log(path.sep);

// __filename   本文件的绝对路径
console.log(__filename);


let str = 'D:\\Git\\PortableGit\\github\\node-learn\\13-path.js';
// 解析路径并返回对象
console.log(path.parse(str));
// 输出如下
// {
//     root: 'D:\\',
//     dir: 'D:\\Git\\PortableGit\\github\\node-learn',
//     base: '13-path.js',
//     ext: '.js',
//     name: '13-path'
// }


// basename 文件名
console.log(path.basename(str));
// dirname  获取路径的目录名
console.log(path.dirname(str));
// extname  获取路径中的拓展名
console.log(path.extname(str));

// 输出结果如下
// 13-path.js
// D:\Git\PortableGit\github\node-learn
// .js