
const nav = require('./utils/nav.js');
const {cssSidebar, webpackSidebar, jsSidebar,htmlSidebar} = nav;
module.exports = {
  head: [  ['link', { rel: 'icon', href: 'icon.png' }],
      ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
  ],
  theme: 'reco',
  title: '云深不知处',
  author: 'TanXi',
  description: '',
  base: '/',
  port: 8080,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    type: 'blog',
    lastUpdated: '最后更新时间',
    repo: 'https://github.com/tanxi2019/github.io',
    repoLabel: 'Github',
    valineConfig: {
          appId: '...',// your appId
          appKey: '...', // your appKey
      },
      // 博客设置
      blogConfig: {
          tag: {
              location: 4,     // 在导航栏菜单中所占的位置，默认3
              text: 'Tag'      // 默认文案 “标签”
          }
      },
      sidebarDepth: 2, // 侧边栏显示2级
      algolia: {  // 搜索需要提交
          apiKey: '<API_KEY>',
          indexName: '<INDEX_NAME>'
      },
      // 假如文档不是放在仓库的根目录下：
      docsDir: 'docs',
      // 默认是 false, 设置为 true 来启用
      // editLinks: true,
      // editLinkText: '在 GitHub 上编辑此页',
      serviceWorker: {
          updatePopup: {
              message: "发现新内容可用.",
              buttonText: "刷新"
          }
      },
    nav: [
      { text: 'home',link: '/',icon:'reco-home'},
      { text: 'view',link: '/view/',icon: 'reco-category'},
      { text: 'book',icon:'reco-document', items: [
          { text: 'JavaScript(上)', link: '/JavaScriptTop/'},
          { text: 'JavaScript(中)', link: '/JavaScriptCenter/'},
          { text: 'JavaScript(下)', link: '/JavaScriptDown/'},
          { text: 'JavaScript设计模式', link: '/designPattern/'}
        ]
      },
      { text: 'web',icon:'reco-api', items: [
          { text: 'HTML', link: '/html/'},
          { text: 'CSS',link: '/css/'},
          { text: 'JavaScript', link: '/javascript/'},
        ]},
      { text: 'Vue.js',icon:'reco-v2ex', items: [
        { text: 'Vue', link: '/vue/' }
      ]},
       { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
      { text: 'Webpack', icon:'reco-gitlab',link: '/webpack/'},
      { text: 'VuePress', icon:'reco-three',link: '/vuepress/'},
      { text: 'Git', icon:'reco-beian',link: '/git/'}
    ],
    sidebar: {
      '/css/': [cssSidebar],
      '/javascript/': [jsSidebar],
      '/html/': [htmlSidebar],
      '/webpack/': [webpackSidebar]
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@vuepress': '../images/vuepress',
        '@components': '../.vuepress/components'
      }
    }
  }
};
