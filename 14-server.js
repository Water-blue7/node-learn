// 1、引入http模块
const http = require('http');

// 2、创建一个http服务器
const server = http.createServer((req, res) => {
    // 设置响应头   文本类型html、charset=utf-8
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // 发送响应内容
    res.end('Hello, Node.js!！！汉字不乱码');
});
server.listen(3000, 'localhost', (err) => {
    if (err) throw err;
    console.log('Server running at http://localhost:3000/');
});