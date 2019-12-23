# ES7

## 求幂运算符

```js
console.log(3**2)
```

## includes

**includes为Array原型中的方法，判断数组中是否包含某个元素，返回布尔类型**

```js
const arr = [1,2,3,4]
console.log(arr.includes('2')) // true
```

<p class="tip-warn">
    includes和indexOf的区别，includes可以判断是否有NaN值，而indexOf不能判断，总是返回-1
</p>

