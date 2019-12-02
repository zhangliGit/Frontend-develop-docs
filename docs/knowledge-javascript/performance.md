# 前端性能监控

**浏览器提供了全局对象performance, 此对象提供的属性和方法可以对浏览器发起的请求进行性能分析**

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

+ TCP链接耗时：connectEnd - connectStart 

+ request请求耗时：responseEnd - responseStart

+ 解析dom树耗时：domComplete - domInteractive 

+ 白屏时间：responseStart - navigationStart 

+ domready时间(用户可操作时间节点)：domContentLoadedEventStart - domContentLoadedEventEnd 

+ onload时间(总下载时间)：loadEventEnd - navigationStart 

+ DNS查询耗时：domainLookupEnd - domainLookupStart