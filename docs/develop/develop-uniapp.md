# uniapp 开发流程和规范

**<p class="main-color">移动端为了支持 H5 和小程序，使用跨端框架 uniApp 开发</p>**

[官网文档](https://uniapp.dcloud.io/)

<p class="tip-warn">
移动端请严格参考下列所述的开发流程和规范进行开发
</p>

# 开发流程

1. 每个新模块在 pages 下建立一个目录文件，然后在 index 目录中加入配置

2. 新模块包括家长端和教职工端的，在目录下分别建立两个角色的文件夹，对于不同角色模块共用的部分一定要封装成组件（特殊情况除外）

3. 启动程序服务后，访问如下地址进行开发调试

```js
http://localhost:8080/mobile-protal/protal/#/pages/protal/index/?openid=ojPaT0UdchXoYtnaysWQNVHzAnS4
```

<p>访问后，后续模块中所需要的基础信息都已经缓存，开发时直接在各自模板store中获取即可（避免在开发中直接对参数写死传参, 特殊情况除外，后续一定要更改）</p>
<p>进入到首页后，点击左下角“模块”按钮，回到模块列表页，再点击对应的新增模块进行预览，开发和调试</p>

**<p class="main-color">主要存储信息说明</p>**

![正式](/img/protal-info.png)

- openid：微信公众号唯一标识
- userInfo：当前角色用户的的基本信息
- schoolYear：当前学年信息
- isBZR: 判断当前教职工是否是班主任
- childList: 家长绑定孩子的信息列表

**<p class="main-color">在模块中获取存储信息</p>**

**模块获取全局值**

```js
// 在store目录index.js中获取，根据实际情况获取想要的属性值
const store = Vue.observable({
  isBZR: JSON.parse(uni.getStorageSync("protal")).isBZR,
  userInfo: JSON.parse(uni.getStorageSync("protal")).userInfo,
  openid: JSON.parse(uni.getStorageSync("protal")).openid,
  schoolYear: JSON.parse(uni.getStorageSync("protal")).schoolYear,
});
```

**Vue 界面使用全局值**

```js
import { store, actions } from './store/index.js'
export default {
	computed: {
		isBZR: () => store.isBZR,
		userInfo: () => store.userInfo,
		schoolYearId: () => store.schoolYear.schoolYearId,
  },
  mounted () {
    console.log(this.isBZR)
  }
```

# 开发规范

[参考 uView 组件库](http://uviewui.com/)

<p class="tip-danger">不能随便写色值，间距, 严格按照定义的变量和样式编码</p>

## 公共样式

**<p class="main-color">人员头像</p>**

![正式](/img/user.png)

```js
<image class="u-user-img-small u-border-radius-all" :src="" >小头像</image>
<image class="u-user-img u-border-radius-all" :src="" >默认大小</image>
<image class="u-user-img-big u-border-radius-all" :src="" >大头像</image>
```

**<p class="main-color">浮动添加按钮</p>**

![正式](/img/btn.png)

```js
<view class="float-add-btn"></view>
```

**<p class="main-color">底部固定按钮</p>**

![正式](/img/btn1.png)

```js
// footer-btn高度为100rpx
<view class="footer-btn u-fx-ac">
  <u-button
    type="primary"
    class="u-fx-f1 u-mar-l u-mar-r u-type-primary-dark-bg"
  >
    确定
  </u-button>
  <u-button class="u-fx-f1 u-mar-r u-type-info-dark-bg u-type-white">
    取消
  </u-button>
</view>
```

**<p class="main-color">向右箭头</p>**

![正式](/img/btn2.png)

```js
<view class="rit-icon"></view>
```

## 图片的使用

**界面中需要用的图片和图标，直接使用服务上的图片，尽量不要放在本地使用**

**使用方法如下**

**1. 把切图通过如下地址上传到服务器**

```
http://canpointtest.com/pc-protal/project-publish
```

**2. 在界面中使用**

```js
// 图片
<image class="app-icon" src="/mobile-img/app-auto-icon.png" alt="">
// 背景图片
.bg-img {
  background: url(/mobile-img/app-auto-icon.png) no-repeat;
  background-size: 40rpx 40rpx;
}
```

## 界面基本结构

```js
<template>
  <view class="page-name"> // page-name 请定义为跟界面含义相关的名称
    <view class="header"></view>
    <scroll-view scroll-y="true" class="scroll-h"></scroll-view>
    <view class="footer"></view>
  </view>
</template>
<style lang="scss" scoped>
  .page-name{
    .header {
      height: 88rpx
    }
    .scroll-h {
      height: calc(100vh-188rpx)
    }
    .footer {
      height: 100rpx
    }
  }
</style>
```

## 布局

**<p class="main-color">使用弹性盒子模型</p>**

```js
<view class="u-fx">弹性水平布局</view>
<view class="u-fx-ver">弹性垂直布局</view>
<view class="u-fx-jc">水平居中</view>
<view class="u-fx-je">水平居右</view>
<view class="u-fx-ac">垂直居中</view>
<view class="u-fx-ae">垂直居下</view>
<view class="u-fx-jsa">等间距对齐</view>
<view class="u-fx-jsb">两端对齐</view>
<view class="u-fx-ac-jc">水平垂直居中</view>
<view class="u-fx-wp">弹性布局水平换行</view>
<view class="u-fx-f1">1等份</view>
<view class="u-fx-f2">2等份</view>
<view class="u-fx-f3">3等份</view>
```

## 色值（重点）

**<p class="main-color">严格遵循 uView 的全局色值方案：7 种类型，每种类型包括 4 种色块</p>**

![正式](/img/color-base.png)

### 主色调

![正式](/img/1.png)

**全局变量**

```
$u-type-primary
$u-type-primary-dark
$u-type-primary-disabled
$u-type-primary-light
```

**样式使用方式**

```js
1. 在标签上使用, 直接使用为设置元素文字颜色，加上-bg为背景颜色（推荐）
<view class="u-type-primary u-type-primary-light-bg"></view>
<view class="u-type-primary-bg"></view>

2. 作为全局变量使用
.base {
  color: $u-type-primary;
  background: $u-type-primary-light
}
```

### 错误色调

![正式](/img/2.png)

**全局变量**

```
$u-type-error
$u-type-error-dark
$u-type-error-disabled
$u-type-error-light
```

**样式使用方式同上**

### 警告色调

![正式](/img/3.png)

**全局变量**

```
$u-type-warning
$u-type-warning-dark
$u-type-warning-disabled
$u-type-warning-light
```

**样式使用方式同上**

### 信息色调

![正式](/img/4.png)

**全局变量**

```
$u-type-info
$u-type-info-dark
$u-type-info-disabled
$u-type-info-light
```

**样式使用方式同上**

### 成功色调

![正式](/img/5.png)

**全局变量**

```
$u-type-success
$u-type-success-dark
$u-type-success-disabled
$u-type-success-light
```

**样式使用方式同上**

## 字体颜色

<p class="tip-danger">对于一块区域的字体尽量要通过代表的含义设置不同的颜色，避免一块区域所有颜色值一样，这样看着会很单调，不协调</p>

![正式](/img/6.png)

**全局变量**

```
  $u-main-color
  $u-content-color
  $u-tips-color
  $u-light-color
```

```js
1. 标签使用 （推荐）
<view class="u-main-color"></view>
<view class="u-content-color"></view>
<view class="u-type-primary"></view>

2. 全局变量样式使用
.title {
  color: $u-main-color
  color: $u-content-color
  color: $u-tips-color
  color: $u-light-color
}
```

## 背景颜色

**<p class="main-color">主体界面有两个背景颜色</p>**

- 默认为 u-bg-color 不用设置
- 也可设为 u-bg-fff 或 u-type-white-bg（白色）

一般情况下背景为默认颜色，布局的元素背景为白色，这样有明显的色快区分

对于常用的白色也定义全局变量和样式

```js
$u-type-white: #fff
<view class="u-type-white">白色字体</view>
<view class="u-type-white-bg">白色背景</view>
<view class="u-type-primary-bg"></view>
<view class="u-type-success-bg"></view>
<view class="u-bg-fff"></view>
```

## 边框

**<p class="main-color">4 个边框值，一般使用默认的即可</p>**

**全局变量**

```
$u-border-color （默认使用值）
$u-border-color-dark
$u-border-color-disabled
$u-border-color-light
```

**<p class="main-color">样式使用</p>**

```js
.title {
  border: 1px $u-border-color solid; （默认）
  border: 1px $u-border-color-dark solid;
  border: 1px $u-border-color-disalbed solid;
  border: 1px $u-border-color-light solid;
}
```

**<p class="main-color">直接在标签使用</p>**

```js
<view class="u-bd-1px">4个边框</view>
<view class="u-bd-t">上边框</view>
<view class="u-bd-r">右边框</view>
<view class="u-bd-l">左边框</view>
<view class="u-bd-b">下边框</view>
```

## 圆角

**<p class="main-color">定义了三个圆角，默认情况都使用 u-border-radius</p>**

```js
$u-border-radius: 8rpx; （小圆角）
$u-border-radius-middle: 16rpx; （中圆角）
$u-border-radius-big: 32rpx; （大圆角）
$u-border-radius-all: 100%; （圆形）
```

```js
<view class="u-border-radius">默认圆角</view>
<view class="u-border-radius-middle">中等圆角</view>
<view class="u-border-radius-big">大圆角</view>
<view class="u-border-radius-all">原形</view>
```

## 间距

**<p class="main-color">元素的内外间距分了 4 个档次，默认值一般用 20rpx，看情况而定</p>**

**全局变量**

```js
$u-mp-10: 10rpx;
$u-mp-20: 20rpx;
$u-mp-30: 30rpx;
$u-mp-40: 40rpx;
```

**<p class="main-color">默认的间距为 20rpx</p>**

```js
<view class="u-mar-10">外边距10rpx</view>
<view class="u-mar-t10">上边距10rpx</view>
<view class="u-mar-t">默认间距 居上20rpx</view>
<view class="u-mar-t20">居上20rpx</view>
<view class="u-mar-b20">居下20rpx</view>
<view class="u-padd-b30">底部内间距30rpx</view>
<view class="u-padd-l40">居左内间距40rpx</view>
<view class="u-padd-40">内间距40rpx</view>
```

## 字体大小

**<p class="main-color">默认字体为 28rpx，设置了其他 6 中其他大小字体</p>**

```js
$u-font-01: 26rpx;
$u-font-02: 24rpx;
$u-font-03: 20rpx;
$u-font-1: 32rpx;
$u-font-2: 34rpx;
$u-font-3: 36rpx;
```

```js
<view class="u-font-01">26rpx</view>
<view class="u-font-02">24rpx</view>
<view class="u-font-03">22rpx</view>
<view class="u-font-1">32rpx</view>
<view class="u-font-2">34rpx</view>
<view class="u-font-3">36rpx</view>
```

## 加粗

```js
<view class="u-bold">字体加粗</view>
```

## 元素对齐

```js
<view class="u-tx-c">居中</view>
<view class="u-tx-r">局右</view>
```

## 元素截取

```js
<view class="u-te">元素截取一行</view>
<view class="u-te2">元素截取二行</view>
<view class="u-te3">元素截取三行</view>
```

## 元素滚动

```js
<view class="u-scroll-y">y轴滚动</view>
<view class="u-scroll-x">x轴滚动</view>
```

## 元素阴影

```js
<view class="u-shadow">四边阴影</view>
<view class="u-shadow-rb">右边和底部阴影</view>
<view class="u-shadow-r">右边阴影</view>
<view class="u-shadow-b">底部阴影</view>
```

## 行高

```js
<view class="u-line1">44rpx</view>
<view class="u-line2">48rpx</view>
<view class="u-line3">52rpx</view>
```

## 元素隐藏

```js
<view class="u-of">多出元素隐藏</view>
<view class="u-auto">设置为默认，防止受margin值的影响</view>
```

## 行内块元素

```js
<view class="u-inline-block"></view>
```
