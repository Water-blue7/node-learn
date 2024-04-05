// 导入express
const express = require('express');

// 创建express应用对象
const app = express();

let checkCodeMiddleware = (req, res, next) => {
    // 检查请求中的code是否等于521
    if (req.query.code === '521') {
        next();
    } else {
        res.send('暗号错误');
    }
}

// 创建路由，并将路由中间件函数放进去
app.get('/home', checkCodeMiddleware, (req, res) => {
    res.send('前台首页');
});
app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('后台首页');
});
app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('设置页面');
});
app.all('*', (req, res) => {
    res.send('404 Not Found');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});