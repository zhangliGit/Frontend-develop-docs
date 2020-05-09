# vue 移动端开发

## 脚手架

**脚手架模板基于 vue/cli3.0 构建，其在编译和打包性能方面有了很大的提升，webpack 配置方面也更加的友好，根据项目实际情况在此模块上进行了优化和扩展，形成了一套完善的开发模板，开箱即用**

## 模板特性

- Vue

- Vue-router

- Vuex

- Axios

- Es 系列

- Less

- [Vant UI](https://youzan.github.io/vant/#/) <i class="fa fa-link"></i>

- 布局适配

- Rem 适配

- [图标库 IconFont](https://www.iconfont.cn/) <i class="fa fa-link"></i>

- [Webpack4.0](https://www.webpackjs.com/) <i class="fa fa-link"></i>

- [Babel](https://www.babeljs.cn/) <i class="fa fa-link"></i>

- 单/多模块(页面)打包

- 多环境运行打包

- 代码分割打包

- 组件按需加载

- 全局样式变量（Less）

- CDN 配置

- ESLint + Prettier

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

## 布局适配

**移动端布局使用弹性盒子模型 Flex，为了统一书写规范和简洁，单独制定了一个样式文件 qui-base**

```
|--- src
     |-- assets
         |-- css
            |-- qui-base
```

<p class="tip-danger">
  移动界面布局请严格使用qui-fx-xx样式，特殊情况除外...
</p>

## Rem 适配

**开发时 UI 效果图以 750x1334 分辨率 为标准，界面字体使用 js 动态设置（默认 750 x 1334 设为 20px），css 单位值使用 postcss-plugin-px2rem 插件动态转换 px 为 rem 值，开发时只要测量效果图实际 px 值即可(相关配置已在项目模板中完成，开发时不必理会)**

**动态设置 HTML 字体大小**

```js
(function() {
  var screenW =
    document.documentElement.clientWidth || document.body.clientWidth;
  var hDom = document.getElementsByTagName("html")[0];
  if (screenW > 496) screenW = 496;
  hDom.style.fontSize = screenW / 18.75 + "px";
})();
```

**实际书写, 例如 UI 中有个区域的大小为 120\*120px**

```
.box {
  width: 120px;
  height: 120px
}
```

**转化后（375\*667 尺寸）**

```
.box {
  width: 2.5rem;
  width: 2.5rem;
}
```

## 多环境配置

**开发中预设了三种环境，通过不同命令启动，避免频繁手动切换，基本能满足实际开发需求**

**脚本目录**

```
|--- src
     |-- api
         |-- host-env.js
```

**代码**

```js
const ConfigEnv = process.env.VUE_APP_URL;
let hostEnv = "";

if (ConfigEnv === "test") {
  // 测试环境地址
  hostEnv = "http://test";
} else if (ConfigEnv === "prod") {
  // 正式环境地址
  hostEnv = "http://prod";
} else {
  // 开发环境地址
  hostEnv = "http://dev";
}

export default hostEnv;
```

## 接口配置

**前端调用的接口根据功能进行模块划分，统一放在 api 目录**

**api 接口目录**

```
|--- src
     |-- api
         |-- index.js 总入口文件
         |-- user.js 用户模块接口
         |-- news.js 新闻模块接口
```

---

**接口模块示例**

```js
import hostEnv from "./host-env";

const homeApi = {
  getIndex: "/mobile/getList#post#false", // 获取数据列表
};
for (const val in homeApi) {
  homeApi[val] = `${hostEnv}${homeApi[val]}`;
}
export default homeApi;
```

## 项目打包

<p class="tip-info">
  移动端一般单独打包模块
</p>

**测试环境**

```
npm run build-test moduleName
```

**开发环境**

```
npm run build moduleName
```

**正式环境**

```
npm run build-prod moduleName
```

<p class="tip-warn">
  打包所有模块去掉模块名即可
</p>
