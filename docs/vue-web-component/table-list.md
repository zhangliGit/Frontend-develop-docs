# 表格组件 TableList

## 功能

+ 通用展示

+ 索引自增

+ 单选(默认选择)

+ 复选(默认选择)

+ 全选

+ 图像显示放大

+ 自定义操作按钮

## 示例

```html {9-11,69-75}
<template>
  <table-list
    is-check
    is-zoom
    :page-list="pageList"
    v-model="chooseList"
    :columns="columns"
    :table-list="userList">
    <template v-slot:other1="other1">
     {{ other1.record }}
    </template>
    <template v-slot:actions="action">
      <a-tooltip placement="topLeft" title="详情">
        <a-button size="small" class="detail-action-btn" icon="ellipsis" @click="goDetail(action.record)"></a-button>
      </a-tooltip>
      <a-tooltip placement="topLeft" title="权限管理">
        <a-button size="small" class="power-action-btn" icon="lock"></a-button>
      </a-tooltip>
      <a-tooltip placement="topLeft" title="用户列表">
        <a-button size="small" class="user-action-btn" icon="team"></a-button>
      </a-tooltip>
      <a-tooltip placement="topLeft" title="新增">
        <a-button size="small" class="add-action-btn" icon="plus"></a-button>
      </a-tooltip>
      <a-tooltip placement="topLeft" title="编辑">
        <a-button size="small" class="edit-action-btn" icon="form"></a-button>
      </a-tooltip>
      <a-popconfirm placement="left" okText="确定" cancelText="取消" @confirm="del">
        <template slot="title">
          您确定删除吗?
        </template>
        <a-tooltip placement="topLeft" title="删除">
          <a-button size="small" class="del-action-btn" icon="delete"></a-button>
        </a-tooltip>
      </a-popconfirm>
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
      title: '身份类型',
      width: '10%',
      scopedSlots: {
        customRender: 'other1'
      }
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

## 说明

<p class="tip-color">表格数据唯一性：</p>

+ 为了保证每条数据的唯一性，返回的列表数据中必须有一个id字段，如果没有，先处理数据
+ 表格如需回选，设置chooseList为回选项的数组列表，每项值为表格数据唯一id值

<p class="tip-color">表格中如有非文本内容，可以使用插槽实现，组件中提供了照片和其他自定义类型的插槽：</p>

+ 底照 photoPic
+ 抓怕照 snapPic
+ 其他类型的为 other1 other2 other3 other4 other5

<p class="warn-color">使用方法参照示例</p>

## 属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
is-check|Boolean|否|false|是否有多选框
is-radio|Boolean|否|false|是否有单选框
v-model|Array|否|[]|当有多选择或单选框时，被选中的表格项id
columns|Array|是|[]|表格项列表属性
table-list|Array|是|[]|表格数据, 每条数据需要以id作为唯一标识符，避免key属性重复，
is-zoom|Boolean|否|false|是否显示图片(人像)放大图
width|Number|否|60|图片宽度
height|Number|否|60|图片高度

## 事件

名字|参数|说明
:-|:-|:-
clickRow|String|点击表格触发，返回当前项id，当有多选和单选时可用
