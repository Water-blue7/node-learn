// 1. 导入fs模块
const fs = require('fs');

// 2. stat方法 status缩写
fs.stat('./9-新建文件夹.js', (err, data) => {
    if (err) {
        console.log('操作失败')
        return;
    }
    console.log(data);
    console.log(data.isFile());
    console.log(data.isDirectory());
});

// Stats {
//     dev: 3828851348,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 1125899907052361,
//     size: 1243,
//     blocks: 8,
//     atimeMs: 1712043714257.5415,
//     mtimeMs: 1712043607404.7742,
//     ctimeMs: 1712043607404.7742,
//     birthtimeMs: 1712040224468.5962,
//     atime: 2024-04-02T07:41:54.258Z,
//     mtime: 2024-04-02T07:40:07.405Z,
//     ctime: 2024-04-02T07:40:07.405Z,
//     birthtime: 2024-04-02T06:43:44.469Z
//   }
// true
// false