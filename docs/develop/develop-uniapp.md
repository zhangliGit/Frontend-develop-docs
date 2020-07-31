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

<p>访问后，后续模块中所需要的基础信息都已经缓存，开发时直接在store获取即可（避免在开发中直接对参数写死传参, 特殊情况除外，后续一定要更改）</p>
<p>进入到首页后，点击左下角“模块”按钮，回到模块列表页，再点击对应的新增模块进行预览，开发和调试</p>

# 开发规范

[参考 uView 组件库](http://uviewui.com/)

<p class="tip-danger">不能随便写色值，间距, 严格按照定义的变量和样式编码</p>

## 公共样式

**<p class="main-color">浮动添加按钮</p>**

```js
<view class="float-add-btn"></view>
```

**<p class="main-color">底部固定按钮</p>**

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

## 色值

**<p class="main-color">严格遵循 uView 的全局色值方案（5 种类型）</p>**
**<p class="main-color">每种类型分为 4 个小色块：默认, dark, disabled, light</p>**

- primary
- success
- info
- warning
- error

```js
<view class="u-type-white"></view>
<view class="u-type-primary"></view>
<view class="u-type-success-bg"></view>
.titel {
  color: $u-type-primary
  color: $u-type-primary-dark
  color: $u-type-primary-disabled
  color: $u-type-primary-light
}
```

## 字体颜色

```js
.title {
  color: $u-main-color
  color: $u-content-color
  color: $u-tips-color
  color: $u-light-color
}
```

```js
<view class="u-type-primary"></view>
<view class="u-type-info"></view>
<view class="u-type-error"></view>
```

## 背景颜色

**<p class="main-color">主体界面只能有两个背景颜色</p>**

- 默认为 u-bg-color 不用设置
- 可以设为 u-bg-fff 或 u-type-white-bg（白色）

一般情况下背景为默认颜色，布局的元素背景为白色，这样有明显的色快区分

```js
$u-type-white: #fff

<view class="u-type-success-bg"></view>
<view class="u-type-white-bg"></view>
<view class="u-bg-fff"></view>
```

## 边框

**<p class="main-color">4 个边框值，一般使用默认的即可</p>**

```js
.title {
  border: 1px $u-border-color solid; （默认）
  border: 1px $u-border-color-dark solid;
  border: 1px $u-border-color-disalbed solid;
  border: 1px $u-border-color-light solid;
}
```

**<p class="main-color">直接使用全局样式</p>**

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
$u-border-radius: 8rpx;
$u-border-radius-big: 16rpx;
$u-border-radius-all: 100%;
```

```js
<view class="u-border-radius">默认圆角</view>
<view class="u-border-radius-big">大圆角</view>
<view class="u-border-radius-all">100%圆角</view>
```

## 间距

**<p class="main-color">元素的内外间距分了 4 个档次，默认值一般用 20rpx，看情况而定</p>**

```js
$u-mp-10: 10rpx;
$u-mp-20: 20rpx;
$u-mp-30: 30rpx;
$u-mp-40: 40rpx;
```

**<p class="main-color">默认的间距为 20rpx</p>**

```js
<view class="u-mar-t">默认间距 居上20rpx</view>
<view class="u-mar-t20">居上20rpx</view>
<view class="u-mar-b20">居下20rpx</view>
<view class="u-padd-b30">底部内间距30rpx</view>
<view class="u-padd-l40">居左内间距40rpx</view>
<view class="u-padd-40">内间距40rpx</view>
```

## 字体大小

**<p class="main-color">默认字体为 28rpx，设置了其他 6 中大小字体</p>**

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
<view class="u-shadow">阴影</view>
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
