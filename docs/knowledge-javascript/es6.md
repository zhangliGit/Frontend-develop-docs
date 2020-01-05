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

**proxy可以理解成，在目标对象之前架设一层'拦截'，对目标对象的操作，必须经过这层代理，因此提供了一种机制，可以对外界的访问进行过滤和改写**

**Proxy是一个元素的构造函数，通过new进行实例化, target表示所要拦截的目标对象，hanlder参数是一个对象，用来定制拦截行为**

```js
var proxy = new Proxy(target, handler)
```

```js
let obj = {
  name: 'zhangli'
}
let newObj = new Proxy(obj, {
  get (target, key, receiver) {
    console.log(receiver)
  },
  set (target, key, receiver) {
    console.log(receiver)
  }
})
newObj.name = '123
```

<p class="warn-color">proxy拦截操作</p>

**1. get(target, property, receiver)**

拦截对象属性的读取，比如proxy.foo和proxy['foo'], receiver示一个对象，可选参数

**2. set(target, property, value, receiver)**

拦截对象属性的设置

**3. has(target, property)**

拦截prokey in proxy操作，以及对象的hasOwnproperty方法，返回一个布尔值

**4. deleteProperty(target, property)**

拦截delete proxy[property]操作，返回一个布尔值

**5. ownKeys(target, property)**

拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回对象所有自身的属性，而Object.keys()仅返回对象可遍历的属性

**6. getOwnPropertyDescriptor(target, property)**

拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

**7. defineProperty(target, property, propDesc)**

拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值

**8. preventExtensions(target)**

拦截Object.preventExtensions(proxy)，返回一个布尔值。

**9. getPrototypeOf(target)**

拦截Object.getPrototypeOf(proxy)，返回一个对象。

**10. isExtensible(target)**

拦截Object.isExtensible(proxy)，返回一个布尔值。

**11. setPrototypeOf(target, property)**

拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。 如果目标对象是函数，那么还有两种额外操作可以拦截。

**12. apply(target, object, args)**

拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)

**13. construct(target, args)**

拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)

## Reflect

## Iterator和for...of

**iterator是es6中提供的统一遍历器机制，他为不同的数据结构提供统一的访问机制，任何数据主要部署iterator接口，就可以完成变量操作**

**iterator的遍历过程**

+ 创建一个指针对象，指向当前数据结构的起始位置，也就是说，遍历器对象本质上，就是一个指针对象

+ 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员

+ 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员

+ 不断调用指针对象的next方法，直到他指向数据结构的结束位置

每一次调用next方法，都会返回数据结构的当前成员的信息，具体来说，就是返回一包含value和done两个属性的对象，其中value属性时当前成员的值，done属性时一个布尔值，表示变量是否结束

## Generator函数

**generator函数是一个状态机，封装了对个内部状态，调用generator函数，并不会马上执行返回结果，而是返回一个遍历器对象，然后一步步调用遍历器对象的next()，遇到yield会暂停执行，并且返回一个对象，yield的值作为对象的value值，done为是否可以迭代完成**

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next() // {value: 'hello', done: false}
hw.next() // {value: 'world', done: false}
hw.next() // {value: 'ending', done: true}
hw.next() // {value: undefined, done: true}
```

## Promise

**Promise是es6中的一种异步变成解决方案，相比传统的地域嵌套，promise实现了链式调用**

<p class="warn-color">promise的状态</p>

+ pending 未完成

+ resolve 完成

+ reject 失败

promise只有三种状态，并且状态是不可停止和不可逆的，只能从未完成变成完成或失败，then方法可以接受两个回调函数作为参数，第一个回调函数的promise对象的状态变为resolve调用，第二是是变为reject时调用

**Promise.prototype.catch()**

Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数

```js
getJSON("/posts.json").then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

**Promise.all()**

**此方法用于将多个Promise实例，包装成一个新的promise实例，然后把结果合并一起返回**

```js
var p = Promise.all([p1, p2, p3]);
```

p的状态由p1、p2、p3决定，分成两种情况。

+ p1、p2、p3都为resolve时 p委会变成resolve

+ p1,p2,p3中只要有个为rejected， p的状态就会变成rejected

**Promise.race()**

**同样此方法用于将对个Promise实例，包装成一个promise实例**

```js
var p = Promise.race([p1, p2, p3]);
```

上面代码中主要有一个实例的状态发生改变，那么p的状态也会马上跟着改变


**Promise.resolve()**

有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用

```js
var jsPromise = Promise.resolve($.ajax('/whatever.json'))
```

**Promise.reject()**

Promise.reject(reason)方法也会返回一个新的Promise实例，该实例的状态为rejected。它的参数用法与Promise.resolve方法完全一致

```js
var p = Promise.reject('出错了');
// 等同于
var p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s){
  console.log(s)
});
```

## 异步操作和Async函数

**javascript是单线程的，同一时间只能做一件事情，因此，异步操作在js中显得尤为重要，不要所有的执行会被卡死，一直等待**

**es6诞生之前，异步编程的方法，大概有4中**

+ 回调函数

+ 事件监听

+ 订阅发布

+ Promise对象

**async可以说是generator的语法糖，结合promise使用异步操作变得更为简单**

```js
async function  test() {
  await readFile('./file.js') // 异步操作，一般返回一个promise对象
}
```

<p class="warn-color">
  在async函数中，只要一个await的执行语句promise返回reject，那么整个async函数都会中断执行，为了避免这样的问题，可以使用try..catch处理错误异常
</p>

```js

async function test() {
  try {
    await Promise.reject('出错了')
  } catch (er) {
  }
  return await Promise.resolve('hello world')
}
f().then(v => console.log(v))
```

<p class="warn-color">
 另一种方法是await后面的Promise对象再跟一个catch方法，处理前面可能出现的错误
</p>

```js

async function test() {
  await Promise.reject('出错了').catch(e => {})
  return await Promise.resolve('hello world')
}
f().then(v => console.log(v))
```

**async函数的实现**

async函数的实现，就是讲generator函数和自动执行器，包装在一个函数里

```js
async function fn(args){
  // ...
}
等同于
function fn(args){
  return spawn(function*() {
    // ...
  });
}
```

## Class

**class是es中定义类的语法，实质上也是构造函数的语法糖**

```js
class Parent {
  constructor (name, age) {
    // 定义类的属性和方法  实例属性和方法
    this.name = name
    this.age = age
    this.showName = function() {
      return this.name
    }
  }
  // 实例属性
  show = () => {
    return 22
  }
  // 原型方法 类似于Parent.prototype.showAge
  showAge () {
    return this.age
  }
}
let p = new Parent('zhangli', '30')
for(let key in Parent.prototype) {
  console.log(key)
}

// 继承
class Child extends Parent {
  constructor (name, age) {
    // 通过super关键字方法调用父类的contructor实现继承
    // 在extends中super的调用不可省略
    super(name, age)
  }
}
let c = new Child('yueyue', 2)
console.log(c.showAge())
```

## Decorator

**修饰器(Decorator)是一个函数，用来修改类的行为**

**修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时，这意味着，修饰器能在编译阶段运行代码**

```js
function decorator(table) {
  table.isTitle = true
}

@decorator
class MyDecorator {
}

console.log(MyDecorator.isTitle) // true
```

示例中, @decorator就是一个修饰器，它修改了MyDecorator这个类的行为，为它添加了一个静态属性isTitle，等同于下面这样的

```js

@decorator
class A {}

// 等同于

class A {}

A = decorator(A) || A

```

也就是说，修饰器本质就是编译时执行的函数，修饰器函数的第一个参数，就是所要修饰的目标类

```js
function decorator(target) {}
```

如果参数不够用，可以在包装一层传递参数

```js
function decorator(tag) {
  return function(target) {
    target.isTag = tag
  }
}

@decorator(true)
class A {

}
```

<p class="main-color">方法的修饰</p>

修饰器不仅可以修饰类，还可以修饰类的属性

```js
class Person {
  @readonly
  name () {
    return `${this.first} ${this.last}`
  }
}
```

上面代码中,修饰器readonly用来修饰类的name方法

此时，修饰器函数一共可以接受三个参数，第一个参数是所要修饰的目标对象，第二个参数是所要修饰的属性名，第三个参数是属性的描述对象

```js
function readonly (target, name, descriptor) {
  // descriptor 原来的值如下
  // {
  // value: '',
  // enumerable: false,
  // configurable: true,
  // writable: true
  // }
  descriptor.writable = false
  return descriptor
}
```

下面是另一个例子，修改属性描述对象的enumerable属性，使得该属性不可遍历。

```js
class Person {
  @nonenumerable
  get kidCount() { return this.children.length; }
}
function nonenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}
```

**装饰器不能用于函数**

因为函数在javascript中存在提升的操作

## Module

ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict"，严格模式受到如下限制 

+ 变量必须声明后再次使用

+ 函数的参数不能有同名属性，否则报错

+ 不能使用with语句

+ 不能对只读属性赋值，否则会报错

+ 不能删除不可删除的属性，否则报错

+ 不能删除变量 delete prop 会报错，只能删除属性 delete global[prop]

+ eval不会在它的外层作用域引入变量

+ eval和arguments不能被重新赋值

+ arguments 不会自动反映函数参数的变化

+ 不能使用arguments.callee

+ 不能使用arguments.caller

+ 禁止this指向全局对象

+ 不能使用fn.caller 和 fn.arguments获取函数调用的堆栈

+ 增加保留着（比如protected，static和interface）

+ 函数调用call和apply时，第一个参数为null 和 undefined时，默认指向全局window，而严格模式不变

<p class="main-color">es6模块加载的实质</p>

ES6模块加载的机制，与commonjs模块完全不同，Commonjs模块输出的是一个值的拷贝，而es6模块输出的是值的引用。

commonjs模块输出的是被输出值的拷贝，也就是说，一旦输出一个值，模块内部的变化就响应不到这个值

ES6模块的运行机制与commonjs不一样，它遇到模块的加载命令import时，不会去执行模块，而只是生成一个动态的只读引用，等到真的需要用到时，再到模块里面去取值，换句话说，es6的输入有点像unix系统的符号链接，原始值变了，import输入的值也会跟着变化，因此，es6模块是动态引入，并且不是缓存值，模块里面的变量绑定其所在的模块

<p class="main-color">浏览器的模块加载</p>

```js
<script type="module" src="foo.js"></script>
```

浏览器对于带有type="module"的，都是异步加载外部脚本，不会造成堵塞浏览器。

对于外部的模块脚本（上例是foo.js），有几点需要注意

+ 改脚本自动采用严格模式

+ 该脚本内部的顶层变量，都只在该脚本内部有效，外部不可见

+ 该脚本内部的顶层的this关键字，返回undefined，而不是指向window

**commonjs模块的加载原理**

CommonJS的一个模块，就是一个脚本文件。require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象

```js
{
  id: '...',
  exports: { ... },
  loaded: true,
  ...
}
```
上面代码就是Node内部加载模块后生成的一个对象。该对象的id属性是模块名，exports属性是模块输出的各个接口，loaded属性是一个布尔值，表示该模块的脚本是否执行完毕。其他还有很多属性，这里都省略了。

以后需要用到这个模块的时候，就会到exports属性上面取值。即使再次执行require命令，也不会再次执行该模块，而是到缓存之中取值。也就是说，CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。