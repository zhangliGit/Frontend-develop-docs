# Webpack 知识点

## 参考资料

[webpack 资料](https://juejin.im/post/5de06aa851882572d672c1ad#0_8)

[官网](http://webpack.html.cn/concepts/entry-points.html)

## 入口配置

- 传值为字符串时，所有资源都会打包在一个文件中，默认为 name 为 main

- 传值为数组时，默认情况下所有资源也会打包在一个文件，默认为 name 为 main，只是文件里会有多个加载入口，如果为字符串时只有一个

- 传值为对象，可以实现多入口打包，会生成多个文件，实现多页面打包，文件名为对象的属性名

```js
module.exports = {
  entry: {
    // 多个入口配置,可实现多页面模块打包，配合html插件实现
    app: "./src/index.js",
    print: "./src/print.js",
    vendro: ["jquery", "loadsh"] // 第三方模块，单独打包引入，减少入口文件大小
  }
};
```

## 出口配置

```js
output: {
    // 打包后文件存放的目录
    path: path.resolve(__dirname, '../dist'),
    // name：为打包文件的名称
    // hash： 每次打包的hash值，每次都不一样
    // chunkHash： 每次打包文件的hash值，如果自身chunk内容变化则变化
    // contenthash：entry新增或者减少入口文件时，也会导致 contenthash变化
    // id: 与name相同
    filename: '[name].[chunkhash].[id].[hash].bundle.js'
}
```

## 模块

**在配置中提供 mode 选项**

- production：生产环境，此时 process.env.NODE_ENV 会被设置成"production", 并且会启用内置的插件对打包进行优化

- development：开发环境，此时 process.env.NODE_ENV 会被设置成"development"

```js
module.exports = {
  mode: "production"
};
```

## Loader 配置

<p class="main-color">loader的作用是对模块源码进行转化，loader可以使你在import或加载模块时预处理文件</p>

```js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "ts-loader" }
    ]
  }
};
```

**引用图片**

**引用样式**

**引用图标库**

## 配置 typescript

**1. 安装 typescript**

```
cnpm i typescript -D

tsc --init // 生成typescript配置文件
```

**2. 配置 loader**

```js
rules: [
  {
    test: /\.ts?$/,
    use: {
      loader: "ts-loader"
    }
  }
];
```

**3. 配置文件**

<p class="main-color">tsconfig.json</p>

```js
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "sourceMap": true,
    "allowJs": true
  },
  "include": ["src/*"],
  "exclude": ["node_modules"]
}

```

**4. 配置默认后缀**

```js
resolve: {
  extensions: [".js", ".ts", ".json", ".css", ".scss", ".less", ".vue"];
}
```

## 配置 eslint

[参考文档](https://www.cnblogs.com/xjnotxj/p/10828183.html)

**1. 安装依赖**

```js
cnpm i eslint eslint-loader eslint-friendly-formatter @typescript-eslint/parser @typescript-eslint/eslint-plugin -D

eslint --init // 生成.eslintrc.js配置文件
```

**2. 配置 webpack**

```js
rules: [
  {
    test: /\.(js|ts|vue)$/,
    loader: "eslint-loader",
    enforce: "pre",
    include: [path.resolve(__dirname, "src")], // 指定检查的目录
    options: {
      // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
      formatter: require("eslint-friendly-formatter") // 指定错误报告的格式规范
    }
  }
];
```

**3. .eslintrc.js 配置文件**

**eslint 的配置有多种方式**

- .eslintrc.js 文件,需要使用 module.exports = {}导出

- .eslint 文件，直接编写 json 对象

<p class="mian-color">参考项目配置</p>

**4. 配置 vscode 自动保存修复**

**先安装 eslint prettier 插件 在找到 eslint 的 setting.json**

```js
{
  "window.zoomLevel": 0, // 窗口大小比例
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "emmet.triggerExpansionOnTab": true,
  "update.mode": "none",
  "editor.formatOnSave": true, // eslint保存格式化
  "javascript.format.enable": false, // 让prettier遵循eslint格式美化
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript"
  ],
  "typescript.tsdk": "node_modules/typescript/lib",
  "task.slowProviderWarning": [
    "npm"
  ]
}
```

## 配置 prettier

<p class="main-color">prettier的功能是用来格式化（美化）代码，让所有人的代码风格保持一致，比eslit的代码格式更强大</p>

**1. 安装依赖**

```js
cnpm i prettier eslint-plugin-prettier -D
```

**2. 创建配置文件.prettierrc**

**prettier 配置文件有几种模式**

- .js 文件，需要使用 module.exports = {}导出

- .prettierrc 文件直接是 json 对象格式

```js
{
  "printWidth": 120,
  "semi": true,
  "singleQuote": true
}
```

## 配置 babel

[参考文档](https://www.cnblogs.com/wuxianqiang/p/11339462.html)
[参考文档](https://www.jianshu.com/p/ce28ceddda72)

**1. 安装 babel 相关核心模块**

- babel-loader：对文件进行转化，处理成 webpack 能识别的模块，然后进行转码处理

- babel-core：babel-loader 对文件进行转码时会调用此模块提供的 api

- babel-preset-env：进行转码时的规则

```js
 cnpm i babel-loader babel-core babel-preset-env -D
```

**2. 配置 webpack**

```js
```

## webpack 插件

**plugins 是 webpack 的支柱，主要用来完成 loader 实现不了的功能, 主要的对象为 compiler 和 compilation**

## 自动生成 HTML 文件

**安装插件**

```
cnpm i html-webpack-plugin -D
```

**插件配置**

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack",
      template: "./index.html",
      filename: "index.html",
      chunks: ["manifest", "vendor", "index"] // 引入对应的模块 多页面模式，对应entry入口
    })
  ]
};
```

## 模块解析(解析规则)

**使用 enhanced-resolve，webpack 能够解析三种文件路径：**

- 相对路径

- 绝对路径

- 模块路径

## webpack 热加载

**webpack-dev-server 在开发环境中实现热加载的功能，运行命令后自动打开浏览器，编辑器保存代码后界面自动刷新**

**安装依赖**

```js
cnpm i webpack-dev-server -D
```

**package 配置**

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open --mode development",
    "build": "webpack --config webpack.config.js"
  },
```

**devServer 配置**

```js
devServer: {
  host: 'localhost',
  port: '8899',
  inline: true
},
```

## 清除打包文件

**插件默认情况下会删除 output.path 目录下的所有文件**

**安装依赖**

```
cnpm i clear-webpack-plugin -D
```

**插件配置**

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [new ClearWebpackPlugin()]
};
```

## 压缩(缩小)打包文件

```
cnpm i uglifyjs-webpack-plugin -D
```

## 单独提取 css 样式

**extract-text-webpack-plugin 插件与最新的 webpack 版本有冲突**

**安装依赖**

```
npm install extract-text-webpack-plugin@next -D
```

**loader 配置**

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  module: [
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        }),
      }
    }]
  ]
}
```

## 配置环境变量

**使用 webpack 自带的插件 DefinePlugin**

```js
const webpack = require("webpack");
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("develop")
    })
  ]
};
```

## 代码分割 splitChunks

## 打包分析

- webpack-chart webpack 数据交互饼图。

- webpack-visualizer 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的

- webpack-bundle-analyzer 一款分析 bundle 内容的插件及 CLI 工具，以便捷的、交互式、可缩放的树状图形式展现给用户

## 懒加载
