module.exports = {
  markdown: {
    lineNumbers: true
  },
  title: '前端开发文档',
  description: '基于React + redux + antd-design + webpack + babel + less + es6/7/8 + axios的技术栈',
  logo: '/favicon.png',
  footer: 'Copyright © 2018—2019 武汉全品教育科技有限公司版权所有',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
    }],
    ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: '/base.css'
    }]
  ],
  themeConfig: {
    nav: [
      {
        text: '开发文档',
        link: '/guide'
      },
      {
        text: '组件',
        link: '/component/',
        important: true
      }
      // {
      //   text: 'GitHub',
      //   link: 'https://github.com/YvesCoding/antdsite',
      //   important: true
      // }
    ],
    sidebar: {
      '/guide/': [
        'introduction',
        {
          title: 'page-collapsed',
          children: ['page-collapsed']
        }
      ],
      '/component/': [
        '',
        {
          title: '表单组件',
          collapsable: false,
          children: [
            'table-list',
            'upload-file'
          ]
        }
      ]
    },
    themeColors: {
      'primary-color': '#1890ff'
    }
  }
};
