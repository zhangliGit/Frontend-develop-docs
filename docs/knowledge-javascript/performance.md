# 前端性能监控

**浏览器提供了全局对象performance, 此对象提供的属性和方法可以对浏览器发起的请求进行性能分析**

![performance](/img/performance.png)

## 方法

名字|返回值|说明
:-|:-:|:-
getEntries|Array|获取所有资源请求的时间数据，返回一个按startTime排序的对象数组
getEntriesByName|Array|返回值仍是一个数组,这个数组相当于getEntries()方法经过所填参数筛选后的一个子集
getEntriesByType|Array|返回值仍是一个数组,这个数组相当于getEntries()方法经过所填参数筛选后的一个子集
mark|-|用于做标记和清除标记，供用户自定义统计一些数据，比如某函数运行耗时等
measure|-|用于做标记和清除标记，供用户自定义统计一些数据，比如某函数运行耗时等
clearMarks|-|用于做标记和清除标记，供用户自定义统计一些数据，比如某函数运行耗时等
clearMeasures|-|用于做标记和清除标记，供用户自定义统计一些数据，比如某函数运行耗时等

## 属性

**按触发顺序排列所有属性**

+ navigationStart：在同一个浏览器上下文中，前一个网页unload的时间戳，如果无前一个网页unload，则与fetchStart相等

+ unloadEventStart：前一个网页（与当前页面同域）unload的时间戳，如果无前一个网页unload或者前一个网页与当前页面不同域，则值为0

+ unloadLoadEnd：和unloadEventStart对应，返回前一个网页unload事件绑定回调函数执行完毕的时间戳

+ redirectStart：第一个http重定向发生时的时间，有跳转且是同域名内的重定向才算，否则为0

+ redirectEnd：最后一个http重定向完成时的时间，有跳转且是同域名内的重定向才算，否则为0

+ fetchStart：浏览器准备好使用http请求抓取文档的时间，这发生在检查本地缓存之前

+ domainLookupStart：DNS域名查询开始的时间，如果使用本地缓存（即无DNS查询）或持久链接，则与fetch值相等

+ domainLookupEnd：DNS域名查询结束时间，如果使用本地缓存（即无DNS查询）或持久链接，则与fetch值相等

+ connectStart：http(tcp)开始建立连接的时间，如果是持久连接，则与fetch值相等，如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始时间

+ connectEnd： http(tcp)完成建立连接时间（完成握手），如果是持久连接, 则与fetch相等，如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间

**connectEnd表名http建立连接，也就是握手完成**

+ secureConnectionStart:HTTPS 连接开始的时间，如果不是安全连接，则值为 0

+ requestStart：http请求读取真实文档开始时间（完成建立连接）

+ responseStart：http开始接受响应的时间（获取到第一个字节），包括从本地读取缓存

+ responseEnd：http响应全部接受完成（获取到最后一个字节），包括从本地读取缓存

+ domLoading：开始解析渲染DOM数的时间，此时Document.readyState变为loading，并将抛出readystatechange相关事件

+ domInteractive：完成解析dom树时间，此时Document.readyState变为interactive，并将抛出readystatechange相关事件

**此时dom树解析完成，这时并没有开始加载网页内的资源**

+ domContentLoadedEventStart：DOM解析完成后，网页内资源加载开始时间，文档发生DOMContentLoaded事件的时间

+ domComtentLoadedEventEnd：DOM解析完成后，网页内资源加载完成的时间（如js脚本加载执行完毕），文档的DOMContentLoaded事件的结束时间

+ domComplete：DOM树解析完成，且资源也准备就绪的时间，Document.readyState变为complete，并将抛出readystatechange相关事件

+ loadEventStart：load事件发送给文档，也即load回调函数开始执行的时间，如果没有绑定load，值为0

+ loadEventEnd：load事件的回调函数执行完毕的时间，如果没有绑定load事件，值为0


## 耗时计算

+ 重定向耗时： redirectEnd - redirectStart

+ DNS查询耗时：domainLookupEnd - domainLookupStart

+ TCP链接耗时：connectEnd - connectStart 

+ request请求耗时：responseEnd - responseStart

+ 解析dom树耗时：domComplete - domInteractive 

+ 白屏时间：responseStart - navigationStart 

+ domready时间(用户可操作时间节点)：domContentLoadedEventEnd - navigationStart

+ onload时间(总下载时间)：loadEventEnd - navigationStart 

+ DNS查询耗时：domainLookupEnd - domainLookupStart