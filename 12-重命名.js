// 1. 导入fs模块
const { log } = require('console');
const fs = require('fs');

var dir = 'dir';

// 2. 创建一些文件

fs.stat('./' + dir, (err, data) => {
    if (err) {
        log('ERROR: ' + err);
        log('操作失败==>不存在此文件夹或……');
        makeDir(dir);
        return;
    } else {
        if (data.isDirectory) {
            fs.rm('./' + dir, { recursive: true }, err => {
                if (err) {
                    log('删除失败');
                    return;
                } else {
                    log('删除成功');
                    makeDir(dir);
                }
            });
        } else {
            log('dir不是一个文件夹')
        }
    }
});
function makeDir(dir) {
    fs.mkdir('./' + dir, err => {
        if (err) {
            log('创建失败');
            return;
        } else {
            log('创建成功');
            for (let i = 0; i <= 15; i++) {
                log(i);
                writeFile(i + '.txt');
            }
            const files = fs.readdirSync('./dir');
            // log(files);

            files.forEach(item=>{
                log(item);
            });
        }
    });
}
function writeFile(fileName) {
    const fs1 = require('fs');
    fs1.writeFile('./dir/' + fileName, fileName + 'haha', err => {
        if (err) {
            console.error('Error :', err);
            log('写入失败');
        } else {
            log('写入成功');
        }
    });

}