// 导入HTTP模块
const http = require('http');
// 导入文件模块
const fs = require("fs");

// 创建服务服务对象
const server = http.createServer((req, res) => {
    // 根据请求方法做出判断，比如只让GET请求通过
    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end('<h1>405 Method Not Allowed</h1>');
        return;
    }

    // 获取请求URL路径
    let { pathname } = new URL(req.url, 'http://127.0.0.1');
    console.log(pathname);

    // 之前的那种方法要写太多if else 非常的繁琐
    // 设置网站根目录，根据自己的需求调整
    // let root = __dirname + '/../';
    let root = __dirname + '/page';
    // 拼接文件路径
    let filePath = root + pathname;
    // 读取文件，异步 API
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // 设置字符集
            res.setHeader('content-type', 'text/html;charset=utf-8');
            // 根据error的code返回响应体
            switch (err.code) {
                case 'ENOENT':
                    console.log(err);
                    res.statusCode = 404;
                    res.end('<h1>404 NOT FOUND</h1>');
                    break;
                case 'EPERM':
                    res.statusCode=403;
                    res.end('<h1>403 Forbidden</h1>');
                default:
                    res.statusCode=500;
                    res.end('<h1>500 internal Server Error</h1>');
            }
            return;
        }
        res.end(data);
    });

});

// 监听端口 启动服务
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});