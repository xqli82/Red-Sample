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

config account in file:
useSettings -> user.js

Default account:

`admin:` 
+ username:admin
+ password:123

`client:`
+ username:user
+ password:public


# Test

input url in browser: localhost:3000/login

you will see the login page