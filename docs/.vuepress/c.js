['demo-block', {
    settings: {
      jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
      cssLib: ['http://xxx'], // 在线示例中的css依赖
      vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
      react: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js', // 在线示例中的react依赖
      reactDOM: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js', // 在线示例中的reactDOM依赖
      //jsfiddle: true, // 是否显示 jsfiddle 链接
     // codepen: true, // 是否显示 codepen 链接
      horizontal: false // 是否展示为横向样式
    }
  }],


  ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js' }]