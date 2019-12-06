# 空数据展示 NoData

## 功能

+ 展示空数据

+ 可以触发按钮


## 示例

```html
<template>
  <no-data :img="img" msg="什么也没有~">
    <a-button type="primary" slot="btn">新增</a-button>
  </no-data>
</template>

<script>
import NoData from '@c/NoData'
export default {
  name: 'Demo',
  components: {
    NoData
  },
  data () {
    return {
      img
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
</style>
```

## 属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
img|String|否||空图片
msg|String|否|暂无数据|文字说明

## 插槽

名字|类型|说明
:-|:-|:-
btn||可添加按钮
