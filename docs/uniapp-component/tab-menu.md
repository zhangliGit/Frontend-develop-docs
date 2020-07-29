# 顶部 tab 切换 tab-menu

## 功能

- 顶部 tab 切换

## 示例

```html
<template>
  <view>
    <tab-menu @change="change" :data-list="dataList"></tab-menu>
  </view>
</template>

<script>
  export default {
    name: "select",
    data() {
      return {
        dataList: [
          {
            name: "语文",
          },
          {
            name: "数学",
          },
          {
            name: "英语",
          },
        ],
      };
    },
    methods: {
      change(index) {
        console.log(index);
      },
    },
  };
</script>
<style lang="scss" scoped></style>
```

## 属性

| 名字      | 类型  | 是否必需 | 默认值 | 说明       |
| :-------- | :---- | :------: | :----: | :--------- |
| data-list | Array |    是    |   []   | tab 数据列 |

## 事件

| 名字   | 参数  | 说明       |
| :----- | :---- | :--------- |
| change | index | tab 栏索引 |
