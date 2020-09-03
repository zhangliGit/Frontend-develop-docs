# vue web 端 开发流程和规范

<p class="tip-warn">
pc端请严格参考下列所述的开发流程和规范进行开发
</p>

# 开发流程

1. 开发新业务系统（模块）时，在 src/project 目录下拷贝 protal-template，然后重新命令为新系统名称 protal-system(系统名)

2. 开发阶段对应 layouts/BasicLayout.vue 中 isDev 属性为 ture，当开发完成配置菜单之后设置为 false，后续开发调试直接从 login 模块进去

3. 新增加的业务系统需要在 project/index 目录 App.vue 中新增一个业务系统配置，在 appList 属性中新增

4. 配置完成启动程序服务，访问对应的模块进行调试

**<p class="main-color">如果需要用到一些基础信息，先使用账号密码登录缓存信息，然后在退出进入对应模块</p>**

<p>登录后，后续模块中所需要的基础信息都已经缓存，开发时直接在各自store中获取即可（避免在开发中直接对参数写死传参, 特殊情况除外，后续一定要更改）</p>

**<p class="main-color">主要存储信息说明</p>**

**登录后的学校信息**

![loginInfo](/img/loginInfo.png)

**登录后的用户信息**

![loginInfo](/img/loginType.png)

**<p class="main-color">在模块中获取存储信息</p>**

**模块获取全局值**

```js
// 在store/modules目录home.js中获取，根据实际情况获取想要的属性值
const home = {
  namespaced: true,
  state: {
    loginInfo: JSON.parse(window.sessionStorage.getItem("loginInfo") || "{}"),
    loginType: JSON.parse(window.sessionStorage.getItem("loginType") || "{}"),
  },
};
```

**Vue 界面获取值**

```js
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("home", ["loginInfo", "loginType"]),
  },
};
```

# 开发规范

**<p class="main-color">vue web 端使用 vue-ant-design UI 组件</p>**

[官网文档](https://www.antdv.com/docs/vue/introduce-cn/)

<p class="tip-danger">不能随便写色值，间距, 严格按照定义的变量和样式编码</p>

## 路由界面基本结构

```js
<template>
  <div class="page-name page-layout">
  </div>
</template>
<style lang="less" scoped>
</style>
```

## 布局

**<p class="main-color">使用弹性盒子模型</p>**

```js
<div class="u-fx">弹性水平布局</div>
<div class="u-fx-ver">弹性垂直布局</div>
<div class="u-fx-jc">水平居中</div>
<div class="u-fx-je">水平居右</div>
<div class="u-fx-ac">垂直居中</div>
<div class="u-fx-ae">垂直居下</div>
<div class="u-fx-jsa">等间距对齐</div>
<div class="u-fx-jsb">两端对齐</div>
<div class="u-fx-ac-jc">水平垂直居中</div>
<div class="u-fx-wp">弹性布局水平换行</div>
<div class="u-fx-f1">1等份</div>
<div class="u-fx-f2">2等份</div>
<div class="u-fx-f3">3等份</div>
```

**<p class="main-color">使用组件库的 Grid 栅格布局</p>**

[使用组件 Grid 栅格布局](https://www.antdv.com/components/grid-cn/)

## 色值（重点）

**<p class="main-color">组件库有一套自己的色值，为了和移动端同步，现将移动端的全局变量和 class 类全部移植到 pc 端，使用方式与移动端完全一样，只是使用全局变量时一个用 scss，一个用 less</p>**

![正式](/img/color-base.png)

### 主色调

![正式](/img/1.png)

**全局变量**

```
@u-type-primary
@u-type-primary-dark
@u-type-primary-disabled
@u-type-primary-light
```

**样式使用方式**

```js
1. 在标签上使用, 直接使用为设置元素文字颜色，加上-bg为背景颜色（推荐）
<div class="u-type-primary u-type-primary-light-bg"></div>
<div class="u-type-primary-bg"></div>

2. 作为全局变量使用
.base {
  color: @u-type-primary;
  background: @u-type-primary-light
}
```

### 错误色调

![正式](/img/2.png)

**全局变量**

```
@u-type-error
@u-type-error-dark
@u-type-error-disabled
@u-type-error-light
```

**样式使用方式同上**

### 警告色调

![正式](/img/3.png)

**全局变量**

```
@u-type-warning
@u-type-warning-dark
@u-type-warning-disabled
@u-type-warning-light
```

**样式使用方式同上**

### 信息色调

![正式](/img/4.png)

**全局变量**

```
@u-type-info
@u-type-info-dark
@u-type-info-disabled
@u-type-info-light
```

**样式使用方式同上**

### 成功色调

![正式](/img/5.png)

**全局变量**

```
@u-type-success
@u-type-success-dark
@u-type-success-disabled
@u-type-success-light
```

**样式使用方式同上**

## 字体颜色

<p class="tip-danger">对于一块区域的字体尽量要通过代表的含义设置不同的颜色，避免一块区域所有颜色值一样，这样看着会很单调，不协调</p>

![正式](/img/6.png)

**全局变量**

```
  @u-main-color
  @u-content-color
  @u-tips-color
  @u-light-color
```

```js
1. 标签使用 （推荐）
<div class="u-main-color"></div>
<div class="u-content-color"></div>
<div class="u-type-primary"></div>

2. 全局变量样式使用
.title {
  color: @u-main-color
  color: @u-content-color
  color: @u-tips-color
  color: @u-light-color
}
```

## 背景颜色

**<p class="main-color">主体界面有两个背景颜色</p>**

- 默认为 u-bg-color 不用设置
- 也可设为 u-bg-fff 或 u-type-white-bg（白色）

一般情况下背景为默认颜色，布局的元素背景为白色，这样有明显的色快区分

对于常用的白色也定义全局变量和样式

```js
@u-type-white: #fff
<div class="u-type-white">白色字体</div>
<div class="u-type-white-bg">白色背景</div>
<div class="u-type-primary-bg"></div>
<div class="u-type-success-bg"></div>
<div class="u-bg-fff"></div>
```

## 边框

**<p class="main-color">4 个边框值，一般使用默认的即可</p>**

**全局变量**

```
@u-border-color （默认使用值）
@u-border-color-dark
@u-border-color-disabled
@u-border-color-light
```

**<p class="main-color">样式使用</p>**

```js
.title {
  border: 1px @u-border-color solid; （默认）
  border: 1px @u-border-color-dark solid;
  border: 1px @u-border-color-disalbed solid;
  border: 1px @u-border-color-light solid;
}
```

**<p class="main-color">直接在标签使用</p>**

```js
<div class="u-bd-1px">4个边框</div>
<div class="u-bd-t">上边框</div>
<div class="u-bd-r">右边框</div>
<div class="u-bd-l">左边框</div>
<div class="u-bd-b">下边框</div>
```

## 圆角

**<p class="main-color">定义了三个圆角，默认情况都使用 u-border-radius</p>**

```js
@u-border-radius: 4px; （小圆角）
@u-border-radius-middle: 8px; （中圆角）
@u-border-radius-big: 12px; （大圆角）
@u-border-radius-all: 100%; （圆形）
```

```js
<div class="u-border-radius">默认圆角</div>
<div class="u-border-radius-middle">中等圆角</div>
<div class="u-border-radius-big">大圆角</div>
<div class="u-border-radius-all">原形</div>
```

## 间距

**<p class="main-color">元素的内外间距分了 4 个档次，默认值一般用 20rpx，看情况而定</p>**

**全局变量**

```js
@u-mp-10: 10px;
@u-mp-20: 20px;
@u-mp-30: 30px;
@u-mp-40: 40px;
```

**<p class="main-color">默认的间距为 20px</p>**

```js
<div class="u-mar-10">外边距10px</div>
<div class="u-mar-t10">上边距10px</div>
<div class="u-mar-t">默认间距 居上20px</div>
<div class="u-mar-t20">居上20px</div>
<div class="u-mar-b20">居下20px</div>
<div class="u-padd-b30">底部内间距30px</div>
<div class="u-padd-l40">居左内间距40px</div>
<div class="u-padd-40">内间距40px</div>
```

## 字体大小

**<p class="main-color">默认字体为 28rpx，设置了其他 6 中其他大小字体</p>**

```js
@u-font-01: 12rpx;
@u-font-02: 10rpx;
@u-font-03: 10rpx;
@u-font-1: 16rpx;
@u-font-2: 18rpx;
@u-font-3: 20rpx;
```

```js
<div class="u-font-01">26rpx</div>
<div class="u-font-02">24rpx</div>
<div class="u-font-03">22rpx</div>
<div class="u-font-1">32rpx</div>
<div class="u-font-2">34rpx</div>
<div class="u-font-3">36rpx</div>
```

## 加粗

```js
<div class="u-bold">字体加粗</div>
```

## 元素对齐

```js
<div class="u-tx-c">居中</div>
<div class="u-tx-r">局右</div>
```

## 元素截取

```js
<div class="u-te">元素截取一行</div>
<div class="u-te2">元素截取二行</div>
<div class="u-te3">元素截取三行</div>
```

## 元素滚动

```js
<div class="u-scroll-y">y轴滚动</div>
<div class="u-scroll-x">x轴滚动</div>
```

## 元素阴影

```js
<div class="u-shadow">四边阴影</div>
<div class="u-shadow-rb">右边和底部阴影</div>
<div class="u-shadow-r">右边阴影</div>
<div class="u-shadow-b">底部阴影</div>
```

## 行高

```js
<div class="u-line1">44rpx</div>
<div class="u-line2">48rpx</div>
<div class="u-line3">52rpx</div>
```

## 元素隐藏

```js
<div class="u-of">多出元素隐藏</div>
<div class="u-auto">设置为默认，防止受margin值的影响</div>
```
