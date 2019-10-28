const nav = require('./utils/nav.js');
const {cssSidebar, webpackSidebar, jsSidebar,htmlSidebar} = nav;
module.exports = {
    head: [  ['link', { rel: 'icon', href: 'icon.png' }],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
    ],
    theme: 'reco',
    title: '云深不知处',
    author: 'TanXi',
    description: 'Welcome to my world, you won\'t be dissapointed ! ! !',
    base: '/',
    host: '127.0.0.1',
    port: 8080,
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        huawei: true,
        type: 'blog',
        lastUpdated: '最后更新时间',
        repo: 'https://github.com/tanxi2019/github.io',
        repoLabel: 'Github',
        record: '鄂ICP备19035192号',
        valineConfig: {
            appId: 'YcVQf6558L0z2tdqsys7E75a-gzGzoHsz',// your appId
            appKey: 'y3DVEIJHNMaO1PTOF8DY2eJY', // your appKey
            visitor:true, //文章访问量
            notify:true, // 邮箱提醒
            verify: true, // 验证码
            placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!'
        },
        // 博客设置
        blogConfig: {
            category: { location: 2, text: '分类' }, // 默认 “分类”
            tag: { location: 3, text: '标签'  }    // 默认 “标签”
        },
        // algolia: {  // 搜索需要提交
        //     apiKey: '<API_KEY>',
        //     indexName: '<INDEX_NAME>'
        // },
        docsDir: '/',
        serviceWorker: {
            updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
            }
        },
        nav: [
            { text: '首页',link: '/',icon:'reco-home'},
            { text: '时光轴', link: '/timeLine/', icon: 'reco-date' },
            { text: '关于我', link: '/about/', icon: 'reco-account' }
        ],
        sidebar: {
            '/views/css/': [cssSidebar],
            '/views/javascript/': [jsSidebar],
            '/views/html/': [htmlSidebar],
            '/views/webpack/': [webpackSidebar]
        }
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@vuepress': '../images/vuepress',
                '@components': '../.vuepress/components'
            }
        }
    },
    plugins: [ // 插件
        'flowchart',
        'cursor-effects',
        '@vuepress/medium-zoom',
        [ '@vuepress/pwa',{
            serviceWorker: true,
            updatePopup: true
        }],
        [ '@vuepress-reco/kan-ban-niang',{
            theme:[ 'shizuku','blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'wanko', 'miku', 'z16'],
            clean:false,
        }],
        ['@vuepress/search', { // 搜索
            searchMaxSuggestions: 10
        }],
        [ 'ribbon',
            {
                size: 90, // 彩带的宽度，默认为 90
                opacity: 0.8, // 彩带的不透明度，默认为 0.3
                zIndex: -1 // 彩带的 z-index 属性，默认值为 -1
            }],


    ]
};
