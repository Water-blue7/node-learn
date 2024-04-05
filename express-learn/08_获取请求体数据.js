// 导入express
const express = require('express');
// 导入body-parser：获取请求体数据的包
const bodyParser = require('body-parser');

// 解析querystring格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// 创建express应用对象
const app = express();
// 静态资源中间件设置/public是静态资源的目录
app.use(express.static(__dirname + '/public'));

// 创建路由
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.post('/login', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send(`用户名：${req.body.username}密码：${req.body.password}`);
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});