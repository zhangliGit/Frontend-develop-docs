# javascript核心概念

## javascript引擎

+ javascript引擎用来编译和运行javascript代码

+ javascript引擎先把源代码编译成ast（抽象语法书），然后在通过jit(即时编译)转化为本地机器码执行，此过程中会对语法进行优化

+ javascript是动态编译，只有在函数调用时才会编译成本地代码（机器码），这样就提高了响应时间减少了时间开销

## 执行上下文

**<p class="tip-color">概念</p>**

> js的执行上下文可以理解为当前代码的执行环境，在执行js程序时，每遇到一段js代码，都会创建一个对应的执行上下文，js中可执行代码可分为三种：全局代码，函数代码，eval代码，所有一段js代码必定会产生多个执行上下文，javascript引擎是以堆栈的形式来对其进行管理的，也就是常说的调用栈，栈底是全局执行上下文，栈顶是当前正在执行的上下文

```js
const global = 'globalStack'
function threeStack() {
    const three = 'threeStack'
    function twoStack() {
        const two = 'twoStack'
        eval(console.log('oneStack'))
    }
    twoStack()
}
```

如下代码的调用栈中执行上下文的顺序从底向上依次是 globalStack => threeStack => twoStack => oneStack

**<p class="tip-color">特性</p>**

+ js引擎是单线程

+ 同步执行，调用栈中只有顶层的执行上下文处在执行中，其他的上下文需要等待

+ 全局上下文只有唯一一个，它在浏览器关闭时出栈

+ 函数的执行上下文个数没有限制

+ 每次某个函数被调用，就会有个执行上下文被创建，即使是调用自身的函数，也是如此

**<p class="tip-color">生命周期</p>**

> 第一步：创建阶段

每当js引擎在执行一段可执行代码时，都会先进入创建阶段，该阶段会分别创建变量对象（用于存储在执行上下文中定义的变量和函数声明，此时变量对象不能被访问），建立作用域链以及确定this的执行

> 第二部：执行阶段

当变量对象，作用域链和this指向都建立之后，执行上下文就会进入到执行阶段，在该阶段变量对象就会变为活动对象，对象中的变量和函数声明就可以被访问到

> 第三部：回收阶段(销毁阶段)

当执行上下文执行完毕之后，就会被推出调用栈，此时执行上下文就会被回收

## 变量对象和活动对象

**变量对象在执行上下文的创建阶段被生成，此时变量对象不能被访问到，在执行上下文进入到执行阶段后，变量对象就会变为活动对象，此时对象中存储的变量和函数声明就可以被访问了，他们其实指向的是同一个对象，只是在执行上下文的不同阶段叫法不一样**

## 原型和原型链

**<p class="tip-color">原型</p>**

在javascript中，每一个对象都会有一个隐式的原型属性(__proto__), 指向另外一个对象，这个对象就是我们常说的原型，原型本身也是一个对象，javascript中任何对象都有原型，除了原型链的顶端对象Object.prototype， 其原型指向null， Object.prototype.__proto__ === null

```
# 获取原型对象的方法
var a = {}
Object.getPrototypeOf(a)
a.__proto__
a.constructor.prototype
```

<p class="tip-info">
    <h3>提示</h3>
    javascript中所有的对象都有原型(除了原型链顶端)，函数对象另外还有prototype属性，对象的原型指向其构造函数的prototype
</p>

**<p class="tip-color">原型链</p>**

每个对象都会有一个原型，而原型实质也是一个对象，那么它也会有原型，这样一层一层的指向就形成了原型链

**<p class="tip-color">Function 和 Object</p>**

Function和Object是javascript两个比较特别的对象，他们既是对象，也是构造函数，我们一直说Object是所有对象的基类，但对于Function来说不适用，

<p class="tip-info">Function是所有函数（构造函数）的基类，都是由Function构造而来</p>

```
Function.__proto__ === Function.prototype // Function是由自己构造而来
Object.__proto__ === Function.prototype // Object也是由Function构造而来
Function.prototype.__proto__ === Object.prototype
```

## 作用域和作用域链

**<p class="tip-color">作用域</p>**

作用域可以分为：全局作用域，函数作用域，eval作用域以及es6中的块级作用域

作用域就是当前代码执行环境可以访问到变量的权限，外层作用域不能访问里层的，里层的可以访问到外层的

**<p class="tip-color">作用域链</p>**

作用域链和原型链比较类似，每个函数都会产生对应的作用域，函数嵌套的函数也会产生其作用域，里层函数的执行环境可以访问外出函数中的变量（外层的函数不能访问里层函数的变量对象），这样一层一层的嵌套，就形成了作用域链

**<p class="tip-color">概念</p>**

javascript中的函数采用的是静态作用域，也就是词法作用域，当在执行函数调用时，不管何时何地执行代码，其中的变量在函数定义时就已经决定了，函数会从自身的作用域节点开始，沿着作用域链向上访问变量的值，直到找不到返回undefined

<p class="tip-info">
    <h3>注意</h3>
    作用域链的顶端是全局作用域，作用域链在函数定义时就已经创建了
</p>

## 闭包

**<p class="tip-color">概念</p>**

说到闭包，必定是跟函数有关，有权访问另一个函数作用域内变量的函数就可以用称之为闭包

**<p class="tip-color">特性</p>**

+ 函数返回嵌套的函数形成闭包

+ 闭包内部可以访问外部的参数和变量

+ 外部的参数和变量在被闭包引用是不会被垃圾回收机制回收，可以长期保存在内存中

**<p class="tip-color">优点</p>**

+ 可以避免变量的全局污染

+ 允许函数是有变量的存在

+ 允许变量长期存在内存中


**<p class="tip-color">缺点</p>**

由于变量没有变释放，可能会造成内存泄漏

## 垃圾回收机制

javascript中的垃圾回收采用的是自动垃圾回收机制，主要是一种针对程序执行环境中内存的管理机制，就是利用垃圾收集器，周期性的回收那些程序中，不被其他引用所指向的变量的内存资源，具体来说就是程序中不会再用到的变量，也就是生命周期结束的变量（这种变量多为局部变量），执行上下文执行完之后，其所创建的变量对象已经没有作用，就会被回收（闭包除外），全局变量都不会被回收，只有在关闭浏览器时才会被释放，所有尽量的少定义全局变量，浏览器中常见的清除方式有如下两种：

**<p class="tip-color">标记清除</p>**

这是最常用的垃圾回收方式，当变量进入环境时，这个变量就被标记为'进入环境'，这时的变量理论上就不会被清除，因为在执行环境中可能会用到这个变量，当变量离开环境时，变量被标记为'离开环境', 当垃圾回收器运行时会把'离开标记的变量'给清除，回收内存

**<p class="tip-color">引用计数</p>**                                                                                                                                    
是一种不常见的垃圾回收策略，引用计数是跟踪记录每个值被引用的次数，当生命了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是1，相反，如果包含对这个值引用的变量又取得另一个值，则这个值的引用次数就减去1，当引用次数变为0时，则说明没有办法再访问这个值了，因此就可以将其进行回收

## 严格模式和非严格模式

<p class="tip-color">严格模式在ES5中引入</p>

<p class="tip-color">为什么要引入严格模式?</p>

**ES5之前的JavaScript使用非严格模式运行，在语法上很松散，存在一些不合理，不严谨和安全性的问题，在es5版本中引入了严格模式，用来消除这些行为*，主要目的如下：**

+ 消除JavaScript语法的一些不合理，不严谨之处，减少一些怪异行为

+ 消除代码运行的一些不安全之处，保证代码运行的安全

+ 提高编译器效率，增加运行速度

+ 为未来的新版本的JavaScript做好铺垫

**严格模式和非严格模式的区别**

1. 变量声明，给未声明的变量赋值会报错

2. 函数体内this的指向，严格模式指向undefined，非严格模式指向window

3. 函数的参数不能重复

4. delete不存在的属性，会抛出语法错误，非严格模式下，会静默失败返回false

5. 静止使用with语句

6. 给不允许扩展的object增加属性会报错

7. 定义object时属性重复会报错

8. eval有独立的作用域，eval不能作为变量名或函数名，类似关键字

9. 在严格模式中，arguments对象是传入函数内实参列表的静态副本，非严格模式中，arguments对象里的元素和对应的实参指向同一个引用

10. 禁止访问arguments的caller和callee方法

11. call和apply中传入null，undefined保持原样不会被转化为window

## new构造函数

**new操作符可以操作函数生成一个实例对象，JavaScript中处理此操作的过程分为如下几步**

+ 第一步：创建一个空对象obj，把对象的原型属性(__proto__)指向构造函数的原型, 实现原型继承 obj.__proto__ === Fun.prototype

+ 第二步：把空对象指向函数的this

+ 第三步：通过this新增属性和方法

+ 第四部：默认的返回创建的对象, 手动添加返回值，如果为对象，则返回添加的对象，如果为非对象，则忽略，仍然返回创建的对象

```js
function Test(name, age) {
    var obj = {}
    obj.__proto__ === Test.prototype
    obj = this
    this.name = name
    this.age = age
    return obj
}
```

## this的指向

**this的指向一直是JavaScript中比较头疼的问题，this的指向并不是在定义函数时确定的，而是在调用时决定的，常见的可以分为如下四种:**

**<p class="tip-color">1. 默认绑定</p>**

当函数在全局作用域下被直接调用时，函数内部的this直接指向window

```js
function test() {
    this.a = 'hello'
}
test() // this指向window
```

**<p class="tip-color">2. 隐式绑定</p>**

当函数属于一个对象的属性，并且被对象直接调用时，函数中this会被绑定到调用的对象

```js
const obj = {
    name: 'hello',
    test: function() {
        console.log(this.name)
    }
}
obj.test() // hello
```

**<p class="tip-color">3. 显示绑定</p>**

每个函数的原型属性上都有call和apply方法，其作用可以改变函数this的指向

```js
const obj = {
    name: 'hello',
    test: function() {
        console.log(this.name)
    }
}
obj.test.call({name: 'hi'}) // hi
```

**<p class="tip-color">4. new绑定</p>**

JavaScript中构造函数可以通过new操作符生成示例对象，此时函数中的this指向实例对象

```js
function Test(name, age) {
    this.name = name
    this.age = age
}
const test = new Test('zhangli', '30')
console.log(test.name) // zhangli
```

**<p class="tip-color">* 箭头函数</p>**

箭头函数与普通函数不一样，它的this指向在定义函数时就已经确认，其this指向外层环境（父级）的this

```js
const name = 'hello'
const test = () => {
    console.log(this.name)
}
console.log(test()) // hello
```

## javascript事件轮询(EventLoop)

**<p class="tip-color">单线程</p>**

> javascript语言是单线程，也就是同一时间只能做一件事情，那么为什么JavaScript不能有多个线程呢，这跟JavaScript的用途有关系，JavaScript作为浏览器的脚步语言，主要来用与用户进行交互以及dom操作，这决定了只能使用单线程，如果是异步多线程，可能就出现意想不到的问题，如果有两个线程，一个线程对dom节点进行新增操作，另外一个节点对dom节点进行删除操作，这时浏览器就不知道已哪个线程为准。

**<p class="tip-color">异步操作</p>**

> javascript的异步是通过回调函数来实现的，即通过任务队列，主线程中执行同步操作，异步模块处理异步任务（异步任务必须制定回调函数），然后把回调函数放入任务队列，等待主线程执行完成之后来读取，JavaScript中常见的异步处理有如下几种webAPI：

+ 定时器：由浏览器内核的timer模块来进行延迟处理，但到达时间后，把回调函数放入任务队列

+ ajax，fetch：由浏览器内核的network模块处理，在网络请求完成返回之后，把回调函数放入任务队列

+ onclick等事件：由浏览器内核的DOM Binding模块处理，当事件触发的时候，回调函数会立即添加到任务队列中

+ promise.then(): 属于es6中的api

**<p class="tip-color">异步运行机制</p>**

![event](/img/event-loop.png)

> 1. 所有的同步任务都在主线程上执行，形成一个执行栈（调用栈），以堆栈的形成进行管理，后进先出(first in last out)

> 2. 主线程之外，还存在一个‘任务队列task queue’，只要异步任务有了运行结果，其回调函数就会被放入队列，等待被执行

> 3. 异步任务会在单独的模块进行处理，主要是浏览器内核的模块

> 4. 一旦主线程中的所有同步任务执行完毕，就会读取"任务队列"，看看里面有哪些事件，那些对应的异步任务，于是就结束了等待状态，被拉入到主线程进行执行

> 5. 主线程不断的重复以上的步骤，就形成了JavaScript的事件轮询

**<p class="tip-color">task queue的优先级</p>**

异步任务队列分为：宏任务和微任务，微任务的优先级要比宏任务高，主线程执行完毕之后，每次会事先查找是否存在微任务，如果存在先执行所有的微任务，然后在去执行宏任务

+ 宏任务：定时器，ajax，事件绑定

+ 微任务：promise.then()方法属于微任务

## 事件模型 

## 继承

## 类和模块

## 同步和异步