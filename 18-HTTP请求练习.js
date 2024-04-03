// 导入HTTP模块
const http = require('http');

// 创建服务服务对象
const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    // 获取请求方法     结构赋值:  { method } = req <==> method = req.method
    // let method = req.method;
    let { method } = req;
    // console.log(method);
    // 获取请求路径
    let { pathname } = new URL(req.url, 'http://127.0.0.1');
    // console.log(pathname);
    if (method === 'GET' && pathname === '/login') {
        res.end('登录页面');
        console.log('正在跳转登录页面');
    } else if (method === 'GET' && pathname === '/reg') {
        res.end('注册页面');
        console.log('正在跳转注册页面');
    } else {
        res.end('Not Found');
    }
});

// 监听端口 启动服务
server.listen(3000, () => {
    console.log('3000端口成功启动');
});