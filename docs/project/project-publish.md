# 项目发布

## 移动端项目

**<p class="main-color">使用 uniapp 官方工具 HBuilder X 开发，打包完成之后在项目根目录使用命令进行发布</p>**

**测试环境发布**

```js
node uplaod.js test
```

**正式环境发布**

```js
node uplaod.js prod
```

## pc 端项目

**本地运行(测试环境)**

```js
npm run dev
```

**本地运行(开发环境)**

```js
npm run dev-test
```

**本地运行(正式环境)**

```js
npm run dev-prod
```

**<p class="main-color">所有业务系统都在一个工程目录进行开发，每个系统打包和发布都单独操作，业务系统命令为: protal-xxxx</p>**

**<p class="tip-color">以 protal-school 项目为例, 打包发布（打包完成之后自动发布）</p>**

**测试环境打包发布**

```js
npm run build-test protal-school
```

**正式环境打包发布**

```js
npm run build-prod protal-school
```
