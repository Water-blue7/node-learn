// 导入http模块
const http = require('http');
// 1、导入url模块
const url = require('url');

// 创建一个http服务器
const server = http.createServer((req, res) => {
    // 2、解析req.url
    // console.log(req.url);
    // 如果第二个参数为true 则会将query变成一个对象
    let res_url = url.parse(req.url,true);
    console.log(res_url);
    let pathname = res_url.pathname;
    console.log(pathname);
    console.log(res_url.query.hello);
    console.log(res_url.query.int);
    
    // 设置响应头   文本类型html、charset=utf-8
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // 发送响应内容
    res.end('hello');
});

// 监听端口
server.listen(3000, 'localhost', (err) => {
    if (err) throw err;
    console.log('Server running at http://localhost:3000/');
});