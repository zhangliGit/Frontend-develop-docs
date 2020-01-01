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

<p class="main-color">
  对象没有可可迭代（iterator）属性
</p>

```js
var str = 'abcde'
for(let codePoint of str) {
  console.log(codePoint)
}
```

## 数组的扩展

<p class="main-color">Array.from</p>

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

<p class="main-color">Array.of</p>

**Array.of方法用于将一组值转化为数组**

```js
let str = 'a,b,c'
console.log(Array.of(str)) // [a,b,c]
```

<p class="main-color">数组实例方法copyWithin</p>

**此方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组，使用此方法会修改当前数组**

<p class="main-color">find和findIndex</p>

**find返回符合条件的数组元素，findIndex返回符合条件的数组元素对象**

<p class="main-color">数组实例方法fill</p>

<p class="main-color">entries(), keys()和values()</p>

<p class="main-color">includes</p>

**此方法用于判断数组中是否包括某个元素，第二个参数为查找的起始位置，默认为0**

## 函数的扩展

<p class="main-color">函数默认值</p>

<p class="main-color">函数参数解构</p>

<p class="main-color">函数的length属性</p>

**制定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数**

```js
(function(a,b,c){}).length // 3
(function(a, b, c = 5){}).length // 2 
```

<p class="main-color">rest参数</p>

```js
function test(...values) {
  console.log(values) // [1,2,3]
}
test(1,2,3)
```

<p class="main-color">扩展运算符</p>

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

<p class="main-color">属性简写</p>

```js
let title = 'hello world'
let obj = {
  title
}
console.log(obj.title) // hello world
```

<p class="main-color">方法简写</p>

```js
let obj = {
  showName () {
  }
}
```

<p class="main-color">表达式作为属性</p>

```js
let title = 'abc'
let obj = {
  [title]: 'hello world'
}
console.log(obj.abc)
```

<p class="main-color">Object.is()</p>

**判断两个值是否相等，==判断时会强制进行类型转换，===判断时+0等于-0，NaN不等于NaN, 除此之外与全等的判断基本类似  **

```js
console.log(+0 === -0) // true
console.log(NaN === NaN) // false

console.log(Object.is(+0, -0) // false
console.log(Object.is(NaN, NaN)) // true
```

<p class="main-color">Object.assign()</p>

**此方法用法对象的合并，将对象合并到目标对象，此方法是浅拷贝**

**常见用途**

+ 为对象添加属性和方法

+ 克隆对象（浅拷贝）

+ 合并对个对象

+ 为属性指定默认值

**属性的可枚举性**

对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。

```js
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```
描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性。

ES5有三个操作会忽略enumerable为false的属性。

+ for...in 只遍历对象自身的和继承的可枚举的属性

+ Object.keys() 返回对象自身的所有可枚举的属性的键名

+ JSON.stringify() 只串行化对象自身的可枚举的属性

ES6新增了一个操作Object.assign()，会忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

这四个操作之中，只有for...in会返回继承的属性。实际上，引入enumerable的最初目的，就是让某些属性可以规避掉for...in操作。比如，对象原型的toString方法，以及数组的length属性，就通过这种手段，不会被for...in遍历到

```js
Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
// false

Object.getOwnPropertyDescriptor([], 'length').enumerable
// false
```

另外，ES6规定，所有Class的原型的方法都是不可枚举的。

```js
Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable
// false
```

总的来说，操作中引入继承的属性会让问题复杂化，大多数时候，我们只关心对象自身的属性。所以，尽量不要用for...in循环，而用Object.keys()代替。

<p class="main-color">__proto__ 原型属性</p>

Object.getPrototypeOf()获取对象的原型属性

```js
let obj = { name: 'zhangli'}
console.log(Object.getPrototypeOf(obj)) // Object.prototype
```

Object.setPrototypeOf()设置对象的原型属性

```js
let obj = { name: 'zhangli'}
Object.setPrototype(obj, {age: 30})
console.log(Object.getPrototypeOf(obj).age) //30
```

<p class="main-color">Object.keys()</p>

获取对象的键，以数组的形式返回

```js
let obj = {
  name: 'zhangli',
  age: 30
}
Object.keys(obj) // ['name', 'age']
```

<p class="main-color">Object.values()</p>

获取对象的值，以对象的形式返回

```js
let obj = {
  name: 'zhangli',
  age: 30
}
Object.values(obj) // ['zhangli', 30]
```

<p class="main-color">Object.entries()</p>

获取对象的键值，返回一个二维数组

```js
let obj = {
  name: 'zhangli',
  age: 30
}
Object.entries(obj) // [['name', 'zhangli'], ['age', 30]]
```

<p class="main-color">对象解构赋值</p>

对象解构赋值必须是最后一个参数，否则会报错

```js
let obj = {
  name: 'zhangli',
  age: '23',
  sex: '男'
}
let {name, ...other} = obj // name: zhangli, other = {age: 23, sex: '男'}
```

## Symbol

**在es5中,对象的属性名可能会有冲突，新的属性会覆盖之前定义的属性，造成原有的功能丢失，那么在es6中，引入了新的数据类型symbol，可以帮助解决这个问题**

**symbol属于原始数据类型，表示独一无二的值，在多个模块，对象进行合并时非常有用，避免了属性名的冲突，其属性值不能被枚举和遍历到**

```js
let s = Symbol() // 不能使用new 因为它生成的值是原始类型，而不是对象
var s1 = symbol('foo')
var s2 = symbol('foo')
console.log(s1 === s2) // false
console.log(typeof s) // symbol
```

<p class="main-color">Symbol.for()</p>

**此方法会返回同一个symbol值，如果能过查找到，则返回，否则重新创建**

```js
var s1 = Symbol.for('foo')
var s2 = Symbol.for('foo')
console.log(s1 === s2) // true
```

<p class="main-color">Symbol.keyFor()</p>

**返回一个已登记的symbol类型的值的key描述（字符串）**

```js
let s1 = Symbol('foo')
console.log(Symbol.keyFor(s1)) // foo
```

## Set

**Set是es6中一种新的数据结构，类似于数组，但是它存储数组的值不能有重复，它是一个构造函数**

```js
const arr = new Set([1,2,3]) //
const newArr = Array.from(arr) // 转化为数组
const newArr1 = [...arr] // 转化为数组
```

<p class="main-color">属性</p>

```js
const arr = new Set([1,2,3])
console.log(arr.size)
```

<p class="main-color">方法</p>

+ add 添加某个值，返回新的Set结构本身

+ delete 删除某个值，返回布尔类型

+ has 判断是否有某个值

+ clear 清除所有成员

## weakSet

**weakSet与set类型，也是表示一种数据结构，但是它与set类似，但是与set有两个区别**

+ weakSet存储的值只能是对象，不能是其他类型的值

+ weakSet中对象的引用是弱引用，即垃圾回收机制不考虑weakSet对该对象的引用，只要其他对象不再引用该对象，那么垃圾回收机制就会对该对象进行回收

<p class="warn-tip">WeakSet没有size属性，所有不能被遍历</p>

WeakSet只有add， delete， has方法

## Map

**Map是es6中一种新的数据结构，它与对象类型，对象的属性只能是字符串，而map的属性可以是各种类型的（包括对象），Object提供了字符串-值的对应，而map提供了值-值的对应**

**属性和方法**

+ size 返回map类型的长度

+ set 设置对象的键值

+ get 获取键对应的值

+ has 判断是否有某个属性

+ delete 删除某个属性

## weakMap

**WeakMap与map类型，唯一的区别是它接受对象作为键，除了null**

## Proxy

## Reflect

## Iterator和for...of

## Generator函数

## Promise

## 异步操作和Async函数

## Class

## Decorator

## Module