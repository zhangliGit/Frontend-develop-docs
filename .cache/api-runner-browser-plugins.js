module.exports = [{
      plugin: require('../node_modules/gatsby-mdx-fix/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".md",".mdx",".MD"],"gatsbyRemarkPlugins":["gatsby-remark-external-links",{"resolve":"D:\\github\\Frontend-develop-docs\\node_modules\\antdsite\\lib\\plugins\\gatsby-remark-header-custom-ids\\index.js"},{"resolve":"D:\\github\\Frontend-develop-docs\\node_modules\\antdsite\\lib\\plugins\\gatsby-remark-img-warpper-p\\index.js"},{"resolve":"D:\\github\\Frontend-develop-docs\\node_modules\\antdsite\\lib\\plugins\\remark-default-class-name\\index.js"},{"resolve":"gatsby-remark-prismjs","options":{"inlineCodeMarker":">>>"}},{"resolve":"D:\\github\\Frontend-develop-docs\\node_modules\\antdsite\\lib\\plugins\\gatsby-remark-ant-alert\\index.js","pluginOptions":{"info":[{"alias":"tip","defaultTitle":"Tip"},{"alias":"tip-zh","defaultTitle":"提示"}],"warning":[{"alias":"warning","defaultTitle":"Warning"},{"alias":"warning-zh","defaultTitle":"警告"}],"error":[{"alias":"error","defaultTitle":"Caveat"},{"alias":"error-zh","defaultTitle":"严重警告"}]}}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/antdsite/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
