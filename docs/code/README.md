# 统一编码规范

## 代码规范

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 使用 vscode + ESLint + perttier</p>**

**<p>1. 在 vscode 中安装 Vetur + ESLint + Prettier 插件</p>**
**<p>2. 在 vscode 中首选项-设置-用户设置-extension-ESLint 中配置如下规则</p>**

```js
{
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "emmet.triggerExpansionOnTab": true,
  "update.mode": "none",
  "editor.formatOnSave": true, // eslint保存格式化
  "javascript.format.enable": false,
  "eslint.codeAction.disableRuleComment": {

  }, // 不启动JavaScript格式化
}
```

**<p>3. 在项目根目录下创建.prettierrc 文件, 配置规则如下</p>**

```js
{
  "printWidth": 120,
  "semi": false,
  "singleQuote": true,
  "bracketSpacing": true
}
```

## 文件夹和文件

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 推荐示例</p>**

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

## JS 变量

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 统一使用小驼峰式</p>**

```js
let name = "qui";
let pageNum = "10";
```

## JS 常量

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 统一使用大驼峰式</p>**

```js
const Name = "qui";
const PageNum = "10";
```

## JS 函数

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 统一使用小驼峰式</p>**

```js
myTestFun () {

}
```

## css 样式命名

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> css 命令使用 BEM 规范, 小写加中划线</p>**

```css
// 登录按钮
.login-btn {
}
// 登录按钮激活 连接修饰符为--
.login-btn--active {
}
```

## 图片命名规范

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 推荐使用.png 格式，英文间隔使用下划线</p>**

```
person_icon.png
```
