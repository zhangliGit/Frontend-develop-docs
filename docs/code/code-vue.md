# Vue编码规范

## 组件命名

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 大驼峰命名</p>**

```
DemoCom.vue
```

## 组件名称

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> vue组件都需要name属性，唯一且为驼峰式</p>**

```js
export default {
  name: 'DemoCom'
}
```

## style样式

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 使用scoped属性，避免不同组件样式冲突</p>**

```js
<style lang="less" scoped>

</style>
```
