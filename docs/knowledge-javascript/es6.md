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

## 变量的结构赋值

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