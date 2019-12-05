# 搜索组件 SearchForm

## 功能

+ 文件框

+ 下拉选择框

+ 日期时间选择框

## 示例

```html
<template>
  <search-form @search-form="searchForm" :search-label="searchLabel">
    <div slot="left">
      <a-button type="primary">添加应用</a-button>
    </div>
    <div slot="right">
      <a-button type="dashed">导出</a-button>
    </div>
  </search-form>
</template>
<script>
  import SearchForm from '@c/SearchForm'
  const searchLabel = [
    {
      value: 'name', // 表单属性
      type: 'input', // 表单类型
      label: '姓名', // 表单label值
      placeholder: '请输入姓名' // 表单默认值(非必选字段)
    },
    {
      list: [ // 选择列表项，select控件必传
        {
          key: '',
          val: '全部'
        },
        {
          key: 1,
          val: '开启'
        },
        {
          key: 2,
          val: '关闭'
        }
      ],
      value: 'status',
      type: 'select',
      label: '状态'
    },
    {
      value: 'dateTime', // 单个日期
      type: 'singleTime',
      label: '日期'
    },
    {
      value: 'rangeTime', // 日期区间
      type: 'rangeTime',
      label: '起始时间'
    }
  ]
  export default {
    name: 'Demo',
    components: {
      SearchForm
    },
    data () {
      return {
        searchLabel
      }
    },
    methods: {
      searchForm (values) {

      }
    }
  }
</script>
```

## 属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
searchLabel|Array|是|[]|搜索表单数据

## 事件

名字|参数|说明
:-|:-|:-
searchForm|Object|点击搜索按钮触发
