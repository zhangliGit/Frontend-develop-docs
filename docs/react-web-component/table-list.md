# 表格组件

## 组件功能

+ 通用展示

+ 索引自增

+ 单选(默认选择)

+ 复选(默认选择)

+ 全选

+ 自定义操作按钮

## 组件示例

```js
import React, { Component } from 'react'
import TableList from '@c/TableList
export default class Demo extends Component {
  state = {
    chooseValue: [],
    pageList: {
      page: 1,
      size: 20
    },
    dataList: [
      {
        id: 1,
        name: '张三',
        sex: 1,
      },
      {
        id: 2,
        name: '李四',
        sex: 2,
      },
    ],
  }
  columns = [
    {
      title: '序号',
      dataIndex: 'index',
      width: '10%',
      render: (text: any, record: object, index: number) => {
        return (this.state.pageList.page - 1) * this.state.pageList.size + (index + 1);
      },
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: '20%',
    },
    {
      title: '年龄',
      dataIndex: 'sex',
      render: (text: string) => {
        return parseInt(text) === 1 ? '男' : '女';
      },
      width: '20%',
    },
    {
      title: '操作',
      key: 'action',
      width: '40%',
      render: (record: object) => (
        <div>
          <Tag onClick={() => this.delList(record)} color="orange">
            删除
          </Tag>
          <Tag onClick={() => this.modify(record)} color="#ccc">
            编辑
          </Tag>
        </div>
      ),
    },
  ]
  render () {
    return (
     <TableList
        type="radio"
        chooseValue = { this.state.chooseValue }
        columns={this.columns}
        dataList={this.state.dataList}
      ></TableList>
    )
  }
}
```

## 组件属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
type|String|否|checkout: 多选框 radio: 单选框|是否有选择框
chooseValue|Array|否|[]|默认选中的表格项
columns|Array|是|[]|表格项列表
dataList|Array|是|[]|表格数据, 每条数据需要以id作为唯一标识符，避免key属性重复，

## 组件事件
