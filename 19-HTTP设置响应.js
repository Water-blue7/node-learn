// 导入HTTP模块
const http = require('http');

// 创建服务服务对象
const server = http.createServer((req, res) => {
    // 设置响应状态码 默认200
    // res.statusCode = 201;
    // 响应状态描述，基本上用不到
    // res.statusMessage = 'hello';

    // 响应头
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.setHeader('Serve', 'server_name');

    // 响应体：两种方法 
    // write：可以写多个并且最后还要写一个end    end：单独使用，只能有一个end，标志着本次响应结束
    res.write('write 响应体1');
    res.write('write 响应体2');
    res.write('write 响应体3');
    res.end('end 响应体');
});

// 监听端口 启动服务
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});