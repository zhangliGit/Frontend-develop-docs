# select 选择框 cp-select-item

## 功能

- 底部 select 弹出框

## 示例

```html
<template>
  <view>
    <cp-select-item
      @confirm="confirm"
      v-model="show"
      :items="selectList"
    ></cp-select-item>
  </view>
</template>

<script>
  export default {
    name: "select",
    data() {
      return {
        show: false,
        selectList: [
          {
            id: "1",
            label: "语文",
          },
          {
            id: "2",
            label: "数学",
          },
          {
            id: "3",
            label: "英语",
          },
        ],
      };
    },
    methods: {
      confirm(item) {
        console.log(item); // { id: '', label: ''}
      },
    },
  };
</script>
<style lang="scss" scoped></style>
```

## 属性

| 名字    | 类型    | 是否必需 | 默认值 | 说明               |
| :------ | :------ | :------: | :----: | :----------------- |
| v-model | Boolean |    是    | false  | 是否显示 select 框 |
| items   | Array   |    是    |   []   | select 数据列表    |

## 事件

| 名字    | 参数                 | 说明                 |
| :------ | :------------------- | :------------------- |
| confirm | { id: '', label: ''} | 点击确定按钮回调触发 |
