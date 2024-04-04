// 声明一个函数
function tiemo() {
    console.log('贴膜ing......');
}
function niejiao() {
    console.log('捏脚ing......');
}
// 暴露数据
// module.exports = {
//     tiemo,
//     niejiao
// }

// 暴露数据2    exports  跟上面的一样
exports.niejiao = niejiao;
exports.tiemo = tiemo;

// module.exports可以暴露任意数据
// module.exports = 'adc';
// module.exports = 123;