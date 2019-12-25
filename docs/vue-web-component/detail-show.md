# 详情展示 DetailShow

## 功能

+ 列表详情展示

## 示例

```html
<template>
    <detail-show :detail-info="detailInfo" :title="title"></detail-show>
</template>

<script>
import DetailShow from '@c/DetailShow'
export default {
  name: 'Demo',
  components: {
    DetailShow
  },
  data () {
    return {
      detailInfo: [
        {
          key: '名称',
          val: '摄像头'
        },
        {
          key: '状态',
          val: '启用'
        },
        {
          key: '位置',
          val: '门口'
        }
      ],
      title: '基础信息'
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
title|String|否|基础信息|详情展示标题
detailInfo|Array|是|[]|展示信息数组
