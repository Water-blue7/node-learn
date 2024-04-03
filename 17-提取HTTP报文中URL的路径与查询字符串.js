// 导入http模块
const http = require('http');

// 创建一个http服务器
const server = http.createServer((req, res) => {
    // 实例化URL的对象
    let url = new URL(req.url,'http://127.0.0.1');
    console.log(url);
    // 输出路径
    console.log(url.pathname);
    // 输出keyword 查询字符串
    console.log(url.searchParams.get('keyword'));
    // 发送响应内容
    res.end('hello');
});

// 监听端口
server.listen(3000, 'localhost', (err) => {
    if (err) throw err;
    console.log('Server running at http://localhost:3000/');
});