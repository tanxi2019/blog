// CSS的目录结构
const cssSidebar = {
  title: 'CSS奇技',
  collapsable: false,
  children: [
    '/css/',
    '/css/word.md',
    '/css/border.md',
    '/css/background.md',
    '/css/shadow.md',
    '/css/filter.md',
    '/css/layout.md',
    '/css/shape.md',
    '/css/list.md',
    '/css/practice.md',
    '/css/3d.md',
    '/css/animation.md'
  ]
};
//javascript的目录结构
const jsSidebar = {
  title: 'javascript奇技',
  collapsable: false,
  children: [
    '/javascript/',
    '/javascript/word.md',
    '/javascript/cr.md',
    '/javascript/flash.md',
    '/javascript/xy.md',
    '/javascript/wt.md',
    '/javascript/ajax.md',
    '/javascript/cookies.md',
    '/javascript/tab.md'
  ]
};

const htmlSidebar = {
  title: 'html奇技',
  collapsable: true,
  children: [
    '/html/',
    '/html/word.md',
    '/html/cr.md',
    '/html/flash.md'
  ]
};

// webpack目录结构
const webpackSidebar = {
  title: 'Webpack',
  collapsable: false,
  children: [
    '/webpack/',
    '/webpack/source.md',
    '/webpack/install.md',
    '/webpack/start.md',
    '/webpack/static.md',
    '/webpack/core.md',
    '/webpack/advanced.md',
    '/webpack/case.md',
    '/webpack/optimization.md',
    '/webpack/loader.md',
    '/webpack/plugin.md'
  ]
};

module.exports = {
  cssSidebar,
  jsSidebar,
  htmlSidebar,
  webpackSidebar
};
