# 路由导航栏 RouteNavigator

## 功能

+ 通过路由导航

## 路由配置

**如果有二级或更多层级的路由，path路径需要以一级菜单开头，并且加上isHide属性，这样路由就不会出现在左侧菜单中**

```js
{
  path: '/user',
  name: 'user',
  component: User,
  meta: {
    title: '用户列表'
  }
},
{
  path: '/user/detail',
  name: 'detail',
  component: Detail,
  meta: {
    title: '列表详情',
    isHide: true
  }
},
{
  path: '/user/result',
  name: 'result',
  component: Result,
  meta: {
    title: '结果界面',
    isHide: true
  }
}
```

## 示例

```html
<template>
  <route-navigator></route-navigator>
</template>
<script>
  import RouteNavigator from '@c/RouteNavigator'
  export default {
    name: 'Demo',
    components: {
      RouteNavigator
    },
    data () {
    }
  }
</script>
```
