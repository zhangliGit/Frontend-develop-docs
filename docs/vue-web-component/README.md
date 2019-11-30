# Vue web端UI组件库

## antd-design-vue

**vue web端开发使用[antd-design-vue](https://ant.design/docs/react/introduce-cn)UI框架**

## 通用组件

**vue-design-vue组件库已经非常强大了，在实际开发中会经常用到一些高频率的组件，如表格，表单，树形菜单等，如果在不同模块中直接引用组件，对后期的功能维护和变更会造成很大的影响和工作量，所以有必要对高频率的组件进行第二次封装。**

+ 高频率组件

  + 表格

  + 表单操作

  + 树形菜单结构

  + 弹出层

## 组件开发

<p class="tip-warn">
  <h4>说明</h4>
  为了避免公共组件在项目开发过程中遇到版本问题，会单独在一个工程中进行组件的开发和维护，然后进行发布，实际项目中只进行更新组件操作。
</p>

## 发布组件

**在工程中使用如下命令进行发布**

```js
npm run web-com
```

## 更新组件

**在实际开发项目中使用如下命令**

```js
npm run update
```
<p class="tip-warn">
  <h4>提示</h4>
  确保当前项目根目录下有upload.js文件，需要安装request，adm-zip模块
</p>