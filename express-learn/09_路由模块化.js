// 导入express
const express = require('express');
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter.js');

// 创建express应用对象
const app = express();

// 使用自己写的路由模块
app.use(homeRouter);
app.use(adminRouter);

app.all('*', (req, res) => {
    res.send('404 Not Found');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});