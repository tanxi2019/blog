
const nav = require('./utils/nav.js');
const {cssSidebar, webpackSidebar, jsSidebar,htmlSidebar} = nav;
module.exports = {
  title: 'blog',
  description: '我有一壶酒，足以慰风尘',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: 'icon.png' }]
  ],
  port: 8080,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    repo: 'https://github.com/tanxi2019/github.io',
    repoLabel: 'Github',
    nav: [
      { text: '前端面试',link: '/view/'},
      { text: '书籍', items: [
          { text: 'JavaScript(上)', link: '/JavaScriptTop/'},
          { text: 'JavaScript(中)', link: '/JavaScriptCenter/'},
          { text: 'JavaScript(下)', link: '/JavaScriptDown/'},
          { text: 'JavaScript设计模式', link: '/designPattern/'}
        ]
      },
      { text: '前端三剑客', items: [
          { text: 'HTML', link: '/html/'},
          { text: 'CSS',link: '/css/'},
          { text: 'JavaScript', link: '/javascript/'},
        ]},
      { text: 'Vue.js', items: [
        { text: 'Vue', link: '/vue/' }
      ]},
      { text: 'Webpack',link: '/webpack/'},
      { text: 'VuePress',link: '/vuepress/'},
      { text: 'Git',link: '/git/'}
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
