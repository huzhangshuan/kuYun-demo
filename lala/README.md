# lala

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

整个项目用的是vue框架
1、首先要安装vue-cli和webpack，并用vue创建项目lala(vue init webpack lala)
2、安装依赖，npm install
3、在components组建文件夹中新创建三个组件(Car.vue/DingDan.vue/Tabber.vue)
4、在入口文件App.vue中引入Tabber组件，Tabber组件里面应用router-link标签，用来设置一级路由
5、安装并使用vue-router，配置具体的路由
6、安装并使用vue-x状态管理仓库，方便模块间的传值及取值

