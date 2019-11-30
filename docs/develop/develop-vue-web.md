# vue web端开发

## 脚手架

**脚手架模板基于[ant-design-vue-pro](https://preview.pro.loacg.com/other/icon-selector)项目构建，根据项目实际需求进行了大量更改和优化**

## 模板特性

+ Vue

+ Vue-router

+ Vuex

+ Axios

+ Es系列

+ Less

+ [ant-design-vue](https://vue.ant.design/docs/vue/introduce-cn/) <i class="fa fa-link"></i>

+ [Webpack4.0](https://www.webpackjs.com/) <i class="fa fa-link"></i>

+ [Babel](https://www.babeljs.cn/) <i class="fa fa-link"></i>

+ 多环境运行打包

+ 代码分割打包

+ 组件按需加载

+ 全局样式变量（Less）

+ CDN配置

+ ESLint + Prettier

## 初始化项目

```
> can-cli init vue-admin

> cd vue-admin

> npm i
```

## 运行项目

**测试环境**

```
npm run dev-test
```

**开发环境**

```
npm run dev
```

**生产环境**

```
npm run dev-prod
```

## 多环境配置

**开发中预设了三种环境，通过不同命令启动，避免频繁手动切换，基本能满足实际开发需求**

**脚本目录**

```
|--- src
     |-- config
         |-- index.js
```

**代码**

```js
const ConfigEnv = process.env.VUE_APP_URL
let hostEnv = ''

if (ConfigEnv === 'test') {
  // 测试环境地址
  hostEnv = 'http://test'
} else if (ConfigEnv === 'prod') {
  // 正式环境地址
  hostEnv = 'http://prod'
} else {
  // 开发环境地址
  hostEnv = 'http://dev'
}

export default hostEnv
```

## 项目打包

**测试环境**

```
npm run build-test
```

**开发环境**

```
npm run build
```

**正式环境**

```
npm run build-prod
```