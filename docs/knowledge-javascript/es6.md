# ES6

[es6](http://caibaojian.com/es6/)

## let和const

**let声明常量，它与var的功能类似，但是也有很多区别**

+ let声明的变量没有变量提升

+ let声明的变量不能重复使用let再次声明

+ let会产生块级作用域

```js
let str = 123
let str = 1234 // 不能重复声明变量

console.log(a) // a is not defined 变量不会被提升
let a = 1234

if(true) {
  let a = 123
}
console.log(a) // 会产生块级作用域
```

**const声明常量，声明常量之后不容许再次重复声明**

const声明对象后，可以新增属性值

## 变量的结构赋值

**es6容许按照一定的模式，从数组和对象中提取值，对变量进行复制，这种模式被称之为结构赋值**

<p class="mian-color">对象</p>

```js
var obj = {
  name: 'zhangli'
  age: 30
}
let {name, age} = obj
```

## 字符串扩展

## 数组的扩展

##函数的扩展

## 对象的扩展

## Symbol

## Set

## Map

## weakSet

## weakMap

## Proxy

## Reflect

## Iterator和for...of

## Generator函数

## Promise

## 异步操作和Async函数

## Class

## Decorator

## Module