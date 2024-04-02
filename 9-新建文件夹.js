// 导入fs模块
const fs = require('fs');

// 创建文件夹
fs.mkdir('./html',err => {
    if(err){
        console.log('创建失败·······')
        return;
    }
    console.log('创建成功')
});