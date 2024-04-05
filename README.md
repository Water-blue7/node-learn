# node-learn

### 常用命
#### 启动
```shell
node index.js
```
#### 热启动
```shell
nodemon index.js
# 如果报错
npx nodemon index.js
```
#### npm下载包
```shell
# -g 全局安装   <packagename>@版本号
npm i <packagename>

# 根据package安装包
npm i
```
#### npm卸载包
```shell
# -g 全局卸载
npm r <packagename>
```

#### 命令别名

在`package.json`中`scripts`属性中添加一行

```shell
# "别名": "原来的命令"
"server": "node index.js"
```

使用方法如下，别名为`start`时可以省略run

```shell
npm run server
npm start
```

#### express脚手架

```shell
# 安装
npm i -g express-generator

# 使用
express -e [fileName]
```

