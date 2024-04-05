// 导入express
const express = require('express');

// 创建express应用对象
const app = express();

// 声明中间件函数
function recordMiddleware(req, res, next) {
    console.log(req.url, '我是全局中间件，我被执行了。');
    next();
}

// 使用中间件函数
app.use(recordMiddleware);

// 创建路由
app.get('/home', (req, res) => {
    res.send('前台首页');
});
app.get('/admin', (req, res) => {
    res.send('后台首页');
});
app.get('/setting', (req, res) => {
    res.send('设置页面');
});
app.all('*', (req, res) => {
    res.send('404 Not Found');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});