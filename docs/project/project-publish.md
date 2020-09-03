# 项目发布

## app 电子班牌项目

**<p class="main-color">电子班牌 app 客户端发布分为三个步骤，依次完成即可</p>**

**打包**

```js
npm run build-prod class-card
```

**上传文件包**

发布的版本比最新的大 1 即可

```js
node upload.js class-v1-8
```

**后台发布版本记录**

[发布地址](http://canpointtest.com/pc-protal/project-publish/#/app-version) <i class="fa fa-link"></i>

## uniapp 移动端项目

**<p class="main-color">使用 uniapp 官方工具 HBuilder X 开发，打包完成之后在项目根目录使用命令进行发布</p>**

<p class="tip-warn">由于uniapp项目路由过多，导致打包失败，现将项目分为了3个大模块进行分开打包，分别配置在项目pagesConfig目录下的文件中</p>

- 主模块 protal.json

- 班牌模块 protal-card.json

- 安防系统模块 protal-safe.json

**每次开发时需要的地方：**

- 本地开发时只需要把 all.json（包括所有界面配置） 的配置手动复制到 pages.json 即可

**每次打包时需要修改的地方如下：**

- 把需要打包模块的配置直接复制粘贴到根目录的 pages.json 中

- 修改 mainifest.json 文件中 h5 的配置-运行的基础路径, 打包哪个模块后面的路径就写哪个，如果打包 protal-card，则修改为/mobile-protal/protal-card/

- 修改完成后打包发布即可，发布时最后一个参数为打包的模块

**测试环境发布**

```js
node uplaod.js test protal
```

**正式环境发布**

```js
node upload.js prod protal
node upload.js prod protal-card
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

**不要随便发布，按固定日期上线版本**

```js
npm run build-prod protal-school
```
