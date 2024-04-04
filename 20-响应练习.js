// 导入HTTP模块
const http = require('http');
// 导入文件模块
const fs = require("fs");

// 创建服务服务对象
const server = http.createServer((req, res) => {
    // 响应头
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.setHeader('Serve', 'server_name');

    // 提取文件内容
    let html = fs.readFileSync(__dirname + '/html/table.html');

    // 响应体
    res.end(html);
});

// 监听端口 启动服务
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

