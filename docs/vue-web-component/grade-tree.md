# 年级班级展示 GradeTree

## 功能

+ 展示年级班级树形菜单

## 示例

```html
<template>
  <grade-tree @select="select"></grade-tree>
</template>

<script>
import GradeTree from '@c/GradeTree'
export default {
  name: 'Demo',
  components: {
    GradeTree
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    select (item) {
      console.log(item)
      // {
      //   classCode: '20191201',
      //   gradeCode: '12',
      //   isNewYear: 'false',
      //   schoolYearId: '7'
      //   title: '1班'
      // }
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
