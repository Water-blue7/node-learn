// 导入HTTP模块
const http = require('http');
// 导入文件模块
const fs = require("fs");

// 创建服务服务对象
const server = http.createServer((req, res) => {
    // 获取请求URL路径
    let { pathname } = new URL(req.url, 'http://127.0.0.1');
    console.log(pathname);
    if (pathname === '/') {
        // 提取文件内容
        let html = fs.readFileSync(__dirname + '/html/20-index.html');
        // 响应体
        res.end(html);
    } else if (pathname === '/20-index.css') {
        // 提取文件内容
        let html = fs.readFileSync(__dirname + '/html/20-index.css');
        // 响应体
        res.end(html);
    } else if (pathname === '/20-index.js') {
        // 提取文件内容
        let html = fs.readFileSync(__dirname + '/html/20-index.js');
        // 响应体
        res.end(html);
    } else {
        res.statusCode = 404;
        res.end('<h1>404 NOT FOUND</h1>');
    }

});

// 监听端口 启动服务
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

