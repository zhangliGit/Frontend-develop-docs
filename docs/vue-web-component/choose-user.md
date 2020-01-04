# 选择用户(教职工) ChooseUser

## 功能

+ 多选和单选教职工

## 示例

```html
<template>
  <choose-user ref="form" v-if="userTag" v-model="userTag" @submit="chooseUser" title="选择教职工">
  </choose-user>
</template>
<script>
  import ChooseUser from '@c/ChooseUser'
  export default {
    name: 'Demo',
    components: {
      ChooseUser
    },
    data () {
      return {
        userTag: false
      }
    },
    methods: {
      chooseUser (item) {
        console.log(item)
        // this.$refs.form.reset() 处理成功调用
        // this.$refs.form.error() 处理失败调用
      }
    }
  }
</script>
```

## 属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
title|String|否|详情|弹出框标题
v-model|Boolean|是|false|显示隐藏弹出框
title|String|否|详情|弹出框标题
is-check|Boolean|否|false|多选
is-radio|Boolean|否|false|单选

## 事件

名字|参数|说明
:-|:-|:-
submit|-|点击弹出框按钮触发，返回所选人员信息列表
