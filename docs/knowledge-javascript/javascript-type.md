# 数据类型

**javascript中数据类型分为两种：基本数据类型和复杂数据类型(引用数据类型)**

## 基本数据

**基本数据类型一共有6中，es6之前有5中，es6中新增了symbol**

+ String

+ Number

+ Boolean

+ Null

+ Undefined

+ Symbol

> String, Number, Boolean属于原始类型，代表了各自类型的所有成员

> Undefined，Null属于原始值, 代表了各自特殊类型的唯一成员

**基本数据类型可以使用typeof操作符判断**

```js
console.log(typeof 'hello') // string
console.log(typeof 123) // number
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof {}) // object
const sym = Symbol()
console.log(typeof sym) // symbol
```

**概念**

+ 基本数据类型是一种既非对象又没有方法的数据

+ 基本数据类型是不可以被改变的，只能被替换

+ 基本数据类型是固定大小，被存储在栈内存中

+ 基本数据类型赋值会直接分配新的内存


**<p class="tip-color">number</p>**

<p>数据类型的值分为两种：整数和浮点数</p>

> 整数：为支持各种数值类型最基本的数值字面量格式是十进制整数, 除了十进制表示外，还可以八进制(以8为基数)和十六进制(以16为基数)的字面量，其中，八进制字面值得第一位必须是零，然后是八进制数字序列(0-7), 如果字面量数值超出了范围，那么前导零将被忽略，后面的数值将会被当做十进制数值解析

```js
const num1 = 070 // 八进制的56
const num2 = 079 // 无效的八进制数值，解析为79
const num3 = 08 // 无效的八进制数值，解析为8 
```

> 整数范围：由于内存的限制，ECMAScript中并不能保存世界上所有的值，es能够表示的最小数值保存在Number.MIN_VALUE中,在大多数浏览器中，这个值是5e-324，能过表示的最大数值保存在Number.MAX_VALUE中,这个值是1.7976931348623157e+308，如果计算的值超出了所能存储的范围，则返回特殊的Infinity值，包括(-Infinity)负无穷大

> 浮点数：数值中必须包含一个小数点，并且小数点后面必须至少有一位数字，对于那些极大或极小的数值，可以用e表示法（即科学计数法）表示的浮点数值表示，用e表示法表示的数值等于e前面的数值乘以10的指数次幂

```
# e前的数值（可以是整数也可以是浮点数）乘以 10的7次方， 3.125 * 10000000
const floatNum = 3.125e7 //31250000
```

> 浮点数精度：浮点数值的最高精度是17位小数，但在进行算术计算时其精度确远远不如整数，例如：0.1 加 0.2的结果不是0.3，而是0.30000000000000004

**<p class="tip-color">布尔类型值</p>**

javascript中如下6种值会被转化为fasle，其他的都会被转化为true

+ null

+ undefined

+ 0

+ ''

+ NaN

+ false

**<p class="tip-color">null</p>**

null类型只有一个值，即特殊的null，null值表示一个空对象指针，如果声明一个变量，准备来保存对象，最好初始化为null

## Function类型

**函数是一种比较特殊的结构，它可以是一段代码集合，也可以是一种数据类型，可以作为对象来使用，还可以作为构造函数创建对象类型**

```js
function test() {
}

console.log(typeof test) // function
```

## 引用数据

+ object

> ECMAScript中特殊的对象类型：Array, Function, Math, Date, Error, JSON, RegExp, 每种类型都各自代表一种独立的类

**概念**

+ 数据是可变的，存储在堆内存中

+ 对象赋值时按引用赋值，两个对象指向同一个引用

+ object类型是其他所有实例对象的基类，除了原型链顶端

**原型属性**

+ constructor 构造属性

+ hasOwnproperty(propertyName) 检查给定的属性是否存在当前的对象中

+ isPrototypeOf(object) 用于检查调用方法的对象是否是传入对象的原型

+ propertyIsEnumerable(propertyName) 用于检查给定的属性是否能够使用for-in语句来枚举

+ toLocalString() 返回对象的字符串表示，该字符串与执行环境的地区对应

+ toString() 返回对象的字符串表示

+ valueOf() 返回对象的字符串，数值或布尔值表示（也就是返回对象的原始类型值），通常与toString()方法的返回值相同

**类型判断**

> instanceof：基于原型和原型链的判断, 常用来判断object类型

```
# 示例
a instanceof A // A的原型是否在a的原型链上 

const arr = []
arr instanceof Array
const fun = function(){}
fun instanceof Function
``` 

> constructor: 基于构造函数的判断, 但是对象的构造器属性可能被改写

```
# 示例

a.constructor === A // a的构造函数是否为A

const obj = new Object()
obj.constructor === Ojbect
```

> toString(): 基于Object.prototype.toString判断

```
const obj = {}
Object.prototype.toString.call(obj) // '[object Object ]'
const arr = []
Object.prototype.toString.call(arr) // '[object Array]'
```

<p class="tip-warn">
  <h3>javascript中常见类型划分</h3>
  <p>1. 原始类型，对象类型</p>
  <p>2. 值类型，引用类型</p>
  <p>3. 可变类型，不可变类型</p>
  <p>4. 可拥有方法类型，不可拥有方法类型</p>
</p>