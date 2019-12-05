# 表格组件 TableList

## 功能

+ 通用展示

+ 索引自增

+ 单选(默认选择)

+ 复选(默认选择)

+ 全选

+ 自定义操作按钮

## 示例

```html
<template>
  <table-list
    is-check
    :page-list="pageList"
    v-model="chooseList"
    :columns="columns"
    :table-list="userList">
    <template v-slot:actions="action">
      <a-tag color="#ccc" @click.stop="goDetial('/manage/detail')">详情</a-tag>
      <a-tag @click.stop="goDetial('/manage/addForm')">编辑</a-tag>
    </template>
  </table-list>
</template>
<script>
  import TableList from '@c/TableList'
  const columns = [
    {
      title: '序号',
      width: '5%',
      scopedSlots: {
        customRender: 'index'
      }
    },
    {
      title: '姓名',
      dataIndex: 'userName',
      width: '15%'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: '10%'
    },
    {
      title: '部门',
      dataIndex: 'depart',
      width: '20%'
    },
    {
      title: '手机',
      dataIndex: 'phone',
      width: '10%'
    },
    {
      title: '底照',
      dataIndex: 'photo',
      width: '10%',
      scopedSlots: {
        customRender: 'photoPic'
      }
    },
    {
      title: '抓拍照',
      dataIndex: 'photo',
      width: '10%',
      scopedSlots: {
        customRender: 'snapPic'
      }
    },
    {
      title: '操作',
      width: '20%',
      scopedSlots: {
        customRender: 'action'
      }
    }
  ]
  export default {
    name: 'Demo',
    components: {
      TableList
    },
    data () {
      return {
        pageList: {
          page: 1,
          size: 20
        },
        columns,
        chooseList: [], // 当有选择项时，被选中的项，返回每项的唯一id
        userList: []
      }
    }
  }
</script>
```

## 属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
is-check|Boolean|否|false|是否有多选框
is-radio|Boolean|否|false|是否有单选框
v-model|Array|否|[]|当有多选择或单选框时，被选中的表格项id
columns|Array|是|[]|表格项列表属性
table-list|Array|是|[]|表格数据, 每条数据需要以id作为唯一标识符，避免key属性重复，

## 事件

名字|参数|说明
:-|:-|:-
clickRow|String|点击表格触发，返回当前项id，当有多选和单选时可用
