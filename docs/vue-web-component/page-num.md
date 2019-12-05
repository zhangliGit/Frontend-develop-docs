# 分页组件 PageNum

## 功能

+ 通用展示

+ 分页条数

+ 总页数

## 示例

```html
<template>
  <page-num v-model="pageList" :total="total" @change-page="showList"></page-num>
</template>
<script>
  import PageNum from '@c/PageNum'
  export default {
    name: 'Demo',
    components: {
      PageNum
    },
    data () {
      return {
        pageList: {
          page: 1,
          size: 20
        },
        total: 100
      }
    }
  }
</script>
```

## 属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
v-model|Object|是|{page:1, size: 20}|分页参数
total|Number|是|0|分页列表总条数

## 事件

名字|参数|说明
:-|:-|:-
change-page|{page: 1, size: 20}|点击分页按钮，分页条数触发
