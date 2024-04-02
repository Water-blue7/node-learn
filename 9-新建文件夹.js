// 1 导入fs模块
const fs = require('fs');

// 2 创建文件夹
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('创建失败·······')
//         return;
//     }
//     console.log('创建成功')
// });

// 2-2 递归创建文件夹
// fs.mkdir('a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log('创建失败·······')
//         return;
//     }
//     console.log('创建成功')
// });

// 2-3 读取文件夹   递归{ recursive: true }
// fs.readdir('./', (err, data) => {
//     if (err) {
//         console.log('读取失败·······')
//         return;
//     }
//     console.log(data);
// });

// 2-4 删除文件夹(不推荐)   递归{ recursive: true }
// fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
// fs.rmdir('./html', err => {
//     if (err) {
//         console.log('删除失败');
//         return;
//     }
//     console.log('删除成功');
// });

// 2-5 fs.rm()
// fs.rm('./a', { recursive: true }, err => {
//     if (err) {
//         console.log('删除失败');
//         return;
//     }
//     console.log('删除成功');
// });