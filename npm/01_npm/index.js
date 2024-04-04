// 导入uniq包
const uniq = require('uniq');

// 使用函数 uniq的作用是数组去重
let arr = [1,4,1,2,5,2,6,2];
const result = uniq(arr);
console.log(result);