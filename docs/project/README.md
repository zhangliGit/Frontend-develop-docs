# 武汉全品智慧校园

## 产品原型

[产品原型戳我](http://192.168.1.219:8080/) <i class="fa fa-link"></i>

## 智慧校园云平台

- 管理端 protal-admin

- 学校基础数据 protal-school

- 局端基础数据 protal-organize

- 宿舍管理系统 protal-dorm

- 门禁管理系统 protal-door

- 访客考勤系统 protal-attendance

- 电子班牌系统 protal-class

- 通知公告系统 protal-common

- 疫情防控系统 protal-ncov

- 控制中心系统 protal-control

- 一卡通消费 protal-card

- OA 系统 protal-oa

**测试环境**

[戳我访问](http://canpointtest.com) <i class="fa fa-link"></i>

`发布`

通过命令行直接发布，发布参数为项目目录名

```js
npm run build-test protal-login
```

**正式环境**

[戳我访问](http://canpointlive.com) <i class="fa fa-link"></i>

`发布`

通过命令行直接发布，发布参数为项目目录名

```js
npm run build-prod protal-login
```

## 微信公众号

**微信公众号一共分为 5 个模块**

- protal (主模块)

- protal-door (门禁，考勤，访客)

- protal-oa (oa 办公)

- protal-card (电子班牌)

- protal-safe (安防系统)

`pages.json为启动配置文件，pagesConfig目录下为不同模块的配置文件`

**测试环境**

`本地启动后访问`

```js
http://192.168.x.xxx:8080/mobile-protal/protal/#/pages/protal/index/?openid=ojPaT0UdchXoYtnaysWQNVHzAnS4
```

`发布`

- 通过 hbuildX 进行打包, 打包不同模块时需要修改 pages.json 和 manifest.json 配置

- 然后通过命令行进行发布

```js
node upload.js test protal
node upload.js test protal-door
node upload.js test protal-oa
node upload.js test protal-card
node upload.js test protal-safe
```

`测试公众号`

<img src="/img/wx_ewm_test.jpg" width="200" height="200" />

**正式环境**

`发布`

- 同测试环境一样，发布命令有所区别

```js
node upload.js prod protal
node upload.js prod protal-door
node upload.js prod protal-oa
node upload.js prod protal-card
node upload.js prod protal-safe
```

`正式公众号`

`直接访问`

```js
http://canpointlive.com/mobile-protal/protal/#/?openid=oySYu1DKzVJ5ZEO9l_v_FjHhoEig
```

<img src="/img/wx_ewm_prod.jpg" width="200" height="200" />

## 微信小程序

## 大数据看板

- 平台校端看板 school-view

- 平台局端看板 organize-view

- 宿管看板 dorm-data-view

- 门禁看板 door-record

- 安防校端看板 safe-school-view

- 安防局端看板 safe-organize-view

**测试环境**

`发布`

```js
npm run build-test school-view(系统目录名)
```

**正式环境**

`发布`

```js
npm run build-prod school-view(系统目录名)
```

## 电子班牌 App 客户端

`发布`

- 不同学校发布时的版本有所区别，根据实际情况调整更新版本

- 通过命令发布之后，还要在管理后台进行新增版本发布

`打包`

```js
npm run build-prod class-card
```

`发布`

```js
node upload.js class-v1-8(不同学校对应的版本和版本号)
```

`管理后台更新发布记录`

[管理后台](http://canpointtest.com/pc-protal/project-publish/#/home) <i class="fa fa-link"></i>

## 前端公共管理平台

`图片上传`

[管理后台](http://canpointtest.com/pc-protal/project-publish/#/home) <i class="fa fa-link"></i>

```js
npm run build-test 系统名
```

`正式环境`

```js
npm run build-prod 系统名
```

## 移动端

`测试环境`

```js
npm run build-test 系统名
```

`正式环境`

```js
npm run build-prod 系统名
```

## 官网

[戳我](http://canpointlive.com) <i class="fa fa-link"></i>

## 官网后台管理界面

[戳我](http://canpointtest.com/pc-protal/project-site/) <i class="fa fa-link"></i>
