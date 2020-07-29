# 开发注意事项

## 界面操作

- 界面 CSS 色值使用全局变量

- 提交操作需要给出结果提示

- 删除操作需要弹出确认框

- 界面内容尽可能的组件化

- 数据展示为空的地方需要给提示（推荐使用图片和文字结合）

## 异步请求封装

- 对异步请求通过 axios 进行了封装，对接后台的不同请求类型和方式

- 对每一个请求也做了统一的封装处理，接口以对象的形式配置，键为调用方法名，值为请求的路径，请求路径以#加请求类型结尾，具体实现如下

```js
const api = {
  // test为调用的方法
  // /api/test 为请求的路径
  // #get 为请求的方法
  // #false 为请求时是否有加载提示，默认有
  // 此处不用写参数
  test: "/api/test#get#false",
};
```

**<p class="main-color">get</p>**

**api 配置**

```js
const api = {
  getData: "/api/list#get",
};
```

**界面调用**

```js
this.getData({
  name: "test",
});
```

**<p class="main-color">geUrl</p>**

**api 配置**

```js
const api = {
  getData: "/api/list#geUrl",
};
```

**界面调用**

```js
this.getData("hello");
```

**<p class="main-color">post：json 提交</p>**
**<p class="main-color">postForm：表单提交</p>**
**<p class="main-color">postQuery：表单提交，参数以 get 的形式跟在 url 后面</p>**
**<p class="main-color">postJsonQuery：json 提交，参数以 get 的形式跟在 url 后面</p>**
**<p class="main-color">del：del 提交，参数以斜杠跟在 url 后面</p>**
**<p class="main-color">delQuery：del 提交，参数以 get 的形式提交</p>**
**<p class="main-color">put：put 提交</p>**
