# 组织机构 orgTree

## 功能

+ 展示组织机构树形菜单

## 示例

```html
<template>
  <org-tree @select="select"></org-tree>
</template>

<script>
import OrgTree from '@c/OrgTree'
export default {
  name: 'Demo',
  components: {
    OrgTree
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    select () {
    }
  }
}
</script>
<style lang="less" scoped>
</style>
```


## 事件

名字|类型|说明
:-|:-|:-
select||返回点击班级项信息
