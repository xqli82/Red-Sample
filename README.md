# Red-Sample

Simple but effective  IOT (internet of things) tool, based on Node-Red.

Red-Sample项目意义:基于Node-Red技术,快速构建一个简单好用的物联网工具;

与Red-Things项目的区别:剔除MongoDB数据库,可以将项目快速部署到控制器中;

Red-Things:https://github.com/xqli82/Red-Things


# Init project
> npm install

# Install views JS lib
```
cd public
npm install
```

# Start to run
> node index.js

# Login

config account in file(在下面文件中配置账户信息):

useSettings -> user.js

Default account(默认账户):

`admin(管理员账户):` 
+ username:admin
+ password:123

`client(普通账户):`
+ username:user
+ password:public


# Test

input url in browser: localhost:3000/login

you will see the login page

![login](https://www.v5w.com/wp-content/uploads/2020/06/1592055052-dd69e0a8e9f8b02.png)

# My website(威武网)

官网地址:

https://www.v5w.com

详细介绍:

https://www.v5w.com/red-things/459.html

