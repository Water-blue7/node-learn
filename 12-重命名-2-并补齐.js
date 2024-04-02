// 批量重命名文件名，01-a.txt 03-ad.txt 04-qq.txt，少一个02，重命名时把02补上

// 1. 导入fs模块
const fs = require('fs');

var dir = 'dir';
var newDir = 'newDir'
let i = 0;

// 2. 文件重命名并补全
const files = fs.readdirSync(dir);
files.forEach(item => {
    let data = item.split('-');
    let [num, name] = data;
    i++;
    if (Number(i) < 10) {
        i = '0' + i;
    }
    // 新的文件名
    let newName = i + '-' + name;
    // 重命名
    fs.renameSync(dir + `/${item}`, newDir + `/${newName}`);
})