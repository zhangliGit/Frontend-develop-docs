# 统一编码规范

## 代码规范

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i>  使用ESLint</p>**

## 文件夹和文件

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i>  推荐示例</p>**

```js
# 文件目录
person-center

# 脚本文件
config-api.js

# 样式文件
common-style.css
```

**<p class="error-color">不推荐</p>**

```
# 文件目录
personCenter

# 脚本文件
configApi.js

# 样式文件
commonStyle.css
```

## JS变量

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i>  统一使用小驼峰式</p>**

```js
let name = 'qui'
let pageNum = '10'
```

## JS常量

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i>  统一使用大驼峰式</p>**

```js
const Name = 'qui'
const PageNum = '10'
```

## JS函数

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i>  统一使用小驼峰式</p>**

```js
myTestFun () {

}
```

## css样式命名

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i>  css命令使用BEM规范, 小写加中划线</p>**

```css
// 登录按钮
.login-btn {
}
// 登录按钮激活 连接修饰符为--
.login-btn--active {
}
```

## 图片命名规范

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i>  推荐使用.png格式，英文间隔使用下划线</p>**

```
person_icon.png
```