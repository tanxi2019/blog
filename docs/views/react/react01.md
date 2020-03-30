--- 
title: react简单应用
date: 2020-02-10
tags: 
 - react
categories:
 - react
---
# react简单应用

#### 使用react脚手架创建项目,删除src目录下多余的文件，留下index.js做以下修改即可

```js
import React from 'react'; // 创建组件，虚拟dom,生命周期；
import ReactDom from 'react-dom'; // 把创建好的组件，虚拟dom显示在页面
//创建虚拟节点
const h1 = React.createElement('h1',{id:'title',title:'this is a h1'},'这是一个h1标题');
const div = React.createElement('div',{id:'div',title:'this is a div'},'这是一个的div盒子',h1);

ReactDom.render(div,document.getElementById('root')); // render渲染节点
```
