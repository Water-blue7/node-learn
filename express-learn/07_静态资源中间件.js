// 导入express
const express = require('express');
// 创建express应用对象
const app = express();

// 静态资源中间件设置/public是静态资源的目录
app.use(express.static(__dirname + '/public'));

// 创建路由
app.get('/home', (req, res) => {
    res.send('hello express');
});
// 监听端口，启动服务
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});