# 弹出框组件 ShowDialog

## 功能

+ 通用弹出框

## 示例

```html
<template>
  <show-dialog v-model="dialogTag" @submit="submit" title="详情" on-text="确定">
    <p>这是一个弹出信息框</p>
  </show-dialog>
</template>
<script>
  import ShowDialog from '@c/ShowDialog'
  export default {
    name: 'Demo',
    components: {
      ShowDialog
    },
    data () {
      return {
        dialogTag: false
      }
    }
  }
</script>
```

## 属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
width|String|否|500px|弹出框宽度
v-model|Boolean|是|false|是否显示弹出框
title|String|否|详情|弹出框标题
on-text|String|否|确定|弹出框按钮文字

## 事件

名字|参数|说明
:-|:-|:-
submit|-|点击弹出框按钮触发
