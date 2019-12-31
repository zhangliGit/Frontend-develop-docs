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

**结构赋值的规则是，只要等号的右边的值不是对象，就先将其转为对象**

<p class="main-color">对象</p>

```js
var obj = {
  name: 'zhangli'
  age: 30
}
// 取别名
let {name, age: num} = obj
```

<p class="main-color">数组</p>

```js
const [a ,b, c] = [1, 2, 3]
console.log(a,b,c) // 1,2,3

const [a, ...b] = [1,2,3]
console.log(a, b) // 1, [2,3]
```

<p class="main-color">字符串</p>

```js
const str = '12345'
const [a,b,c,d,e] = str // a： 1 b: 2 c: 3 d:4 e:5
```

<p class="main-color">数字和布尔值</p>

```js
const { toString: s } = 123
console.log(s === Number.prototype.toString) // true

const { toString: s } = true
console.log(s === Boolean.prototype.toString) // true
```

<p class="main-color">undefined和null</p>

**undefined和null无法转化为对象，所有在解构赋值时会报错**

<p class="main-color">函数参数的解构赋值</p>

**函数的参数在作为数字传入时，其实已经被解构成变量x和y**

```js
function test([x, y]) {
  console.log(x, y) // 1, 2
}
test([1,2])
```

## 字符串扩展

**es6中为字符串添加了遍历器接口，使得字符串可以被for...of遍历**

<p class="tip-warn">
  对象没有可可迭代（iterator）属性
</p>

```js
var str = 'abcde'
for(let codePoint of str) {
  console.log(codePoint)
}
```

## 数组的扩展

<p class="tip-warn">Array.from</p>

**Array.from方法用于将两类对象转为真正的数组**

+ 类型数组的对象（arrry-like object）

+ 可遍历（iterator）的对象（包括es6新增的set和map数据结构）

```js
let arrayLike = "{
  '0': 'a',
  '1': 'b',
  'length': 2
}
//es5写法
var arr1 = [].slice.call(arrayLike) // [a,b]

// es6写法
var arr2 = Array.from(arrayLike) // [a, b]
```

**实际应用中常用的类数组对象有**

+ 通过dom操作获取元素列表对象

+ 函数参数对象arguments

+ set和map对象

可以用两种方式把类数组转化为数组，第一种使用Array.from, 第二种使用：扩展运算符...

```js
let nodes = document.querySelector('p')
let nodesArr = Array.from(nodes)
let nodesArr1 = [...nodes]
```

<p class="tip-warn">Array.of</p>

**Array.of方法用于将一组值转化为数组**

```js
let str = 'a,b,c'
console.log(Array.of(str)) // [a,b,c]
```

<p class="tip-warn">数组实例方法copyWithin</p>

**此方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组，使用此方法会修改当前数组**

<p class="tip-warn">find和findIndex</p>

**find返回符合条件的数组元素，findIndex返回符合条件的数组元素对象**

<p class="tip-warn">数组实例方法fill</p>

<p class="tip-warn">entries(), keys()和values()</p>

<p class="tip-warn">includes</p>

**此方法用于判断数组中是否包括某个元素，第二个参数为查找的起始位置，默认为0**

## 函数的扩展

<p class="tip-warn">函数默认值</p>

<p class="tip-warn">函数参数解构</p>

<p class="tip-warn">函数的length属性</p>

**制定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数**

```js
(function(a,b,c){}).length // 3
(function(a, b, c = 5){}).length // 2 
```

<p class="tip-warn">rest参数</p>

```js
function test(...values) {
  console.log(values) // [1,2,3]
}
test(1,2,3)
```

<p class="tip-warn">扩展运算符</p>

**扩展运算符(spread)是三个点，它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列, 应用场景**

+ 合并数组

+ 与解构赋值结合

+ 函数的返回值

+ 字符串

+ 实现了Iterator接口的对象

+ Map和Set结构，Generator函数


```
console.log(...[1,2,3]) // 1, 2, 3
```

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