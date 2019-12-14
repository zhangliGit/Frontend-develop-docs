# 选择学生 ChooseStudent

## 功能

+ 多选和单选学生

## 示例

```html
<template>
  <choose-student v-if="studentTag" v-model="studentTag" @submit="chooseUser" title="选择学生">
  </choose-student>
</template>
<script>
  import ChooseStudent from '@c/ChooseStudent'
  export default {
    name: 'Demo',
    components: {
      ChooseStudent
    },
    data () {
      return {
        studentTag: false
      }
    },
    methods: {
      chooseUser () {}
    }
  }
</script>
```

## 属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
title|String|否|详情|弹出框标题

## 事件

名字|参数|说明
:-|:-|:-
submit|-|点击弹出框按钮触发，返回所选人员信息列表
