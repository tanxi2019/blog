// CSS的目录结构
const cssSidebar = {
  title: 'CSS奇技',
  collapsable: false,
  children: [
    '/views/css/',
    '/views/css/word.md',
    '/views/css/border.md',
    '/views/css/background.md',
    '/views/css/shadow.md',
    '/views/css/filter.md',
    '/views/css/layout.md',
    '/views/css/shape.md',
    '/views/css/list.md',
    '/views/css/practice.md',
    '/views/css/3d.md',
    '/views/css/animation.md'
  ]
};
//javascript的目录结构
const jsSidebar = {
  title: 'javascript奇技',
  collapsable: false,
  children: [
    '/views/javascript/',
    '/views/javascript/word.md',
    '/views/javascript/cr.md',
    '/views/javascript/flash.md',
    '/views/javascript/xy.md',
    '/views/javascript/wt.md',
    '/views/javascript/ajax.md',
    '/views/javascript/cookies.md',
    '/views/javascript/tab.md',
    '/views/javascript/bb.md'
  ]
};

const htmlSidebar = {
  title: 'html奇技',
  collapsable: true,
  children: [
    '/views/html/',
    '/views/html/word.md',
    '/views/html/cr.md',
    '/views/html/flash.md'
  ]
};

// webpack目录结构
const webpackSidebar = {
  title: 'Webpack',
  collapsable: false,
  children: [
    '/views/webpack/',
    '/views/webpack/source.md',
    '/views/webpack/install.md',
    '/views/webpack/start.md',
    '/views/webpack/static.md',
    '/views/webpack/core.md',
    '/views/webpack/advanced.md',
    '/views/webpack/case.md',
    '/views/webpack/optimization.md',
    '/views/webpack/loader.md',
    '/views/webpack/plugin.md'
  ]
};

module.exports = {
  cssSidebar,
  jsSidebar,
  htmlSidebar,
  webpackSidebar
};
