# ES8

## values()

**Ojbect对象的方法，以数组的形式返回对象的值**

```js
const obj = {
    a: 1,
    b: 2
}
console.log(Object.values(obj)) // [1,2]
```

## entries()

**Ojbect对象的方法，以二维数组的形式返回对象的值**

```js
const obj = {
    a: 1,
    b: 2
}
console.log(Object.entries(obj)) // [[a, 1], [b,2]]
```

## 字符串填充


**padStart(len, str) len指转化后的长度，str指填充的字符串**

```js
let a = 'hello'
a.padStart(7, 'h') // hhhello
```

**padEnd**

```js
let a = 'hello'
a.padEnd(7, 'h') // hellohh
```

## async await

**Javascript中的异步请求终极解决方案，代码完全同步化，基于promis和generator**

## Object.getOwnPropertyDescriptors()

返回对象属性的描述

```js
var a = {name: 'zhangli'}
console.log(Object.getOwnPropertyDescriptors(a))
{
    a: {
        configurable: true
        enumerable: true
        value: 2,
        writable: true
    }
}
```