# Webpack知识点

## 参考资料

+ [webpack](https://juejin.im/post/5de06aa851882572d672c1ad#0_8)

## 入口配置

+ 传值为字符串时，所有资源都会打包在一个文件中，默认为name为main，如果为对象有多个属性，则可以打包成多个文件，name为属性名

```js
module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  }
}
```
## 出口配置

## 常用Loader配置

**引用图片**

**引用样式**

**引用图标库**

## 自动生成HTML文件

**安装插件**

```
cnpm i html-webpack-plugin -D
```

**插件配置**

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: './index.html',
      filename: 'index.html'
    })
  ]
}
```

## webpack 热加载

**webpack-dev-server在开发环境中实现热加载的功能，运行命令后自动打开浏览器，编辑器保存代码后界面自动刷新**

**安装依赖**

```js
cnpm i webpack-dev-server -D
```
**package配置**

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open --mode development",
    "build": "webpack --config webpack.config.js"
  },
```

**devServer配置**

```js
devServer: {
  host: 'localhost',
  port: '8899',
  inline: true
},
```

## 清除打包文件

**插件默认情况下会删除output.path目录下的所有文件**

**安装依赖**

```
cnpm i clear-webpack-plugin -D
```

**插件配置**

```js
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
  plugins: [
    new ClearWebpackPlugin()
  ]
}
```

## 压缩(缩小)打包文件

```
cnpm i uglifyjs-webpack-plugin -D
```

## 单独提取css样式

**extract-text-webpack-plugin插件与最新的webpack版本有冲突**

**安装依赖**

```
npm install extract-text-webpack-plugin@next -D
```

**loader配置**

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

**使用webpack自带的插件DefinePlugin**

```js
const webpack = require('webpack')
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('develop')
    })
  ]
}
```

## 代码分割splitChunks

## 打包分析

+ webpack-chart webpack 数据交互饼图。

+ webpack-visualizer 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的

+ webpack-bundle-analyzer 一款分析 bundle 内容的插件及 CLI 工具，以便捷的、交互式、可缩放的树状图形式展现给用户

## 懒加载

## 

