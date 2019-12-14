module.exports = {
  title: '前端开发文档',
  description: 'Vue + React',
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
    }],
    [
      'link', {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css'
      }
    ]
  ],
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    lastUpdated: '上次更新于',
    nav: [
      {
        text: '概述',
        link: '/guide'
      },
      {
        text: '开发指南',
        link: '/develop/'
      },
      {
        text: '开发规范',
        link: '/code/'
      },
      {
        text: '设计规范',
        link: '/design/'
      },
      {
        text: '组件示例',
        important: true,
        items: [
          {
            text: 'vue-mobile组件',
            link: '/vue-mobile-component/'
          }, {
            text: 'vue-web组件',
            link: '/vue-web-component/'
          },
          {
            text: 'react-mobile组件',
            link: '/react-mobile-component/'
          },
          {
            text: 'react-web组件',
            link: '/react-web-component/'
          }
        ]
      },
      {
        text: '前端项目',
        link: '/project/'
      },
      {
        text: '技术分享',
        link: '/sharing/'
      },
      {
        text: '知识库',
        important: true,
        items: [{
          text: '前端链接',
          link: '/knowledge-link/'
        }, {
        text: 'Html',
        link: '/knowledge-html/'
        }, {
          text: 'Css',
          link: '/knowledge-css/'
        }, {
          text: 'Javascript',
          link: '/knowledge-javascript/'
        }, {
          text: 'Vue',
          link: '/knowledge-vue/'
        }, {
          text: 'React',
          link: '/knowledge-react/'
        }, {
          text: 'Http',
          link: '/knowledge-http/'
        }, {
          text: 'Webpack',
          link: '/knowledge-webpack/'
        }, {
          text: 'Node',
          link: '/knowledge-node/'
        }, {
          text: 'Nginx',
          link: '/knowledge-nginx/'
        }, {
          text: 'Git',
          link: '/knowledge-git/'
        }, {
          text: '其他',
          link: '/knowledge-other/'
        }]
      }
      // {
      //   text: 'GitHub',
      //   link: 'https://github.com/YvesCoding/antdsite',
      //   important: true
      // }
    ],
    sidebar: {
      '/guide/': [
        'introduction'
      ],
      '/develop/': [
        '',
        'develop-vue-mobile',
        'develop-vue-web',
        'develop-react-mobile',
        'develop-react-web'
      ],
      '/code/': [
        '',
        'code-vue',
        'code-react',
        'code-tip',
        'code-git'
      ],
      '/design/': [
        '',
        'design-mobile',
        'design-web'
      ],
      '/vue-mobile-component/': [
        ''
      ],
      '/vue-web-component/': [
        '',
        {
          title: '表单组件',
          collapsable: false,
          children: [
            'table-list',
            'page-num',
            'submit-form',
            'search-form',
            'show-dialog',
            'upload-multi'
          ]
        },
        {
          title: '项目组件',
          collapsable: false,
          children: [
            'grade-tree',
            'org-tree',
            'choose-user',
            'choose-student'
          ]
        },
        'no-data'
      ],
      '/react-mobile-component/': [
        ''
      ],
      '/react-web-component/': [
        ''
      ],
      '/project/': [
        '',
        'project-mobile',
        'project-web',
        'project-publish'
      ],
      '/sharing/': [
        ''
      ],
      '/knowledge-link/': [
        ''
      ],
      '/knowledge-html/': [
        ''
      ],
      '/knowledge-css/': [
        '',
        'layout',
        'shape',
        'animation'
      ],
      '/knowledge-javascript/': [
        '',
        {
          title: 'javascript基础',
          collapsable: false,
          children: [
            'javascript-base',
            'javascript-type',
            'javascript-object',
            'javascript-array',
            'javascript-function',
          ]
        },
        'javascript-middle',
        'javascript-high',
        'javascript-syntax',
        'es6',
        'es7',
        'es8',
        'javascript-request.md',
        'javascript-debug.md',
        'performance',
        'javascript-brower.md',
        'canvas'
      ],
      '/knowledge-vue/': [
        ''
      ],
      '/knowledge-react/': [
        ''
      ],
      '/knowledge-http/': [
        ''
      ],
      '/knowledge-webpack/': [
        ''
      ],
      '/knowledge-node/': [
        ''
      ],
      '/knowledge-nginx/': [
        ''
      ],
      '/knowledge-git/': [
        '',
        'git-commit'
      ],
      '/knowledge-other/': [
        ''
      ]
    },
    themeColors: {
      'primary-color': '#1890ff'
    }
  }
};
