# JavaScript高级

## 多线程（web worker）

**javascript引擎执行代码是单线程的，这样如果代码中执行耗时操作时，就会造成后面的执行阻塞，影响用户体验**

<p class="main-color">浏览器中的常用线程</p>

+ js线程（js引擎）

+ 界面渲染线程

+ 事件触发线程

+ 网络请求线程

<p class="main-color">web worker</p>

**web worker是脱离于主线程的后台线程，它与主线程互相独立，执行互不干扰，并且可以互相通信, 它与主线程有几点不同**

<p class="tip-warn">由于脱离主线程，所有不能进行dom操作，不能使用document、window、parent等对象，可以使用console.log函数</p>

<p class="tip-warn">worker进程中可以使用异步网络请求 XMLHttpRequest 和 fetch</p>

worker线程代码

```js
// 监听主线程发送的消息
onMessage = (event) => {
    if (event.data === 'time') {
        // 给主线程发送消息
        postMessage(22)
        // 销毁线程
        close()
    }
}
```

```js
const worker = new Worker('./worker.js')

// worker线程执行出错监听
worker.onError = function() {

}

// 监听worker线程发送的数据
worker.onMessage = function(event) {
    console.log(event.data)
}

// 主线程主动发送消息给worker线程
worker.postMessage('time')

// 销毁worker线程
worker.terminate()
```

<p class="main-color">web worker使用场景</p>

+ 使用专用线程进行数学运算

+ 高频的用户交互

+ 数据的预取

<p class="main-color">web worker使用限制</p>

**1. 同源限制**

分配给worker的脚本地址必须与主进程文件同源，这里的同源包括协议，域名，端口，不支持本地的file://

解决方法：

+ 将动态生成的脚步转化为blog对象

+ 然后给这个blog对象创建一个url

+ 最后将这个创建好的url作为地址传给worker当做参数

```js
let str = 'console.log("hello world!");'
let workerBlob = new Blob([str], { type: "text/java" });
let url = URL.createObjectURL(workerBlob);
let worker = new Worker(url);
```

**2. 访问限制**

Worker子线程所在的全局对象，与主线程不在同一个上下文环境，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象，global对象的指向有变更，window需要改写成self，不能执行alert()方法和confirm()等方法，只能读取部分navigator对象内的数据。另外chrome的console.log()倒是可以使用，也支持debugger断点，增加调试的便利性

**3. 使用异步**

Worker子线程中可以使用 对象发出 AJAX 请求，可以使用setTimeout() setInterval()方法，也可使用websocket进行持续链接。也可以通过imports(url)加载另外的脚本文件，但是仍然不能跨域

**4. 不兼容ie9**

## service worker 和 pwa

<p class="main-color">介绍</p>

**pwa是渐进式web应用程序的简称，它不是一种技术，而是一种实现方式，主要用到的技术是service worker**

**service worker是独立于主线程的后台线程，类似于web worker，只不过它有强大的功能**

+ 静态资源缓存 使用cacheStorage api来缓存js  css 图片 字体等静态文件

+ 离线应用

+ 消息推送

+ 移动端可以桌面化，实现native app的效果

<p class="main-color">使用</p>

**service worker文件**

```js
// 虽然可以在里边为所欲为地写任何js代码，或者也可以什么都不写，
// 都不妨碍这是一个Service Worker，但还是举一个微小的例子：
self.addEventListener('fetch', function (event) {
    if (/\.png$/.test(event.request.url)) {
        console.log('png')
        event.respondWith(fetch('./img/12.png'));
    }
});
```

**网页使用**

```js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        // 所以Service Worker只是一个挂在navigator对象上的HTML5 API而已
        navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
            console.log('我注册成功了666');
        }, function (err) {
            console.log('我注册失败了');
        });
    });
}
```

<p class="main-color">生命周期</p>

+ installing 安装中

+ installed 安装完成

+ activating 激活中

+ activated 激活完成

+ redundant 重新替换

<p class="main-color">事件监听</p>

+ install service worker安装时触发 通常在这个时机缓存文件

+ activate service worker激活时触发，通过在这个时机做一些重置操作，例如处理旧版本的缓存文件

+ fetch 监听浏览器发起的http请求

+ push 和推送相关

+ sync 和后台同步功能相关

## Blob对象

**Blob是一个二进制数据对象，在javascript中它容许我们操作二进制数据**

<p class="main-color">构造blob对象</p>

**1. 使用blob构造函数**

```js
// 第一个参数 data是一组数据，必须是数组
// 第二个参数 表示Blob对象的配置属性，为对象，只有一个type属性
const blob = new Blob(data[, options])

blob.size // Blob大小(以字节为单位)
blob.type // Blob的MIME类型，如果是未知，则为空
```

**2. 使用slice创建**

slice返回一个新的Blob对象

```js
let blob = Blob.slice([start[, end[, contentType]])
```

<p class="main-color">Blob的使用</p>

**1. 创建一个URL指向Blob**

```js
<a download="data.txt" id="getData">下载</a>
const text = `hello world/nzhangli`
const blob = new Blob([text], {type: 'text/html,charset=UTF-8'})
document.querySelector("#getData").href = URL.createObjectURL(blob)
```

**2. 大文件分割上传**


## 前端安全性

## 前端大数据处理

