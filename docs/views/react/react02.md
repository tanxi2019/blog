--- 
title: react基础语法
date: 2020/2/10
tags: 
 - react
categories:
 - react
---

# react基础语法

#### 使用react脚手架创建项目,删除src目录下多余的文件，留下index.js做以下修改即可

```js
import React from 'react'; // 创建组件，虚拟dom,生命周期；
import ReactDom from 'react-dom'; // 把创建好的组件，虚拟dom显示在页面


let  a = 10;
let str ='你好 中国';
let boo = true;
let title = 'title';
let span = <span>你好之华</span>;
const arr = [
    <div>
        <ul>
            <li>数组1</li>
            <li>数组2</li>
            <li>数组3</li>
            <li>数组4</li>
            <li>数组5</li>
        </ul>
    </div>
];
// 将普通字符串数组转为JSX数组并渲染到页面方案1
const arrStr = ['唐三','柯南','张楚岚','小舞','宁荣荣'];
// 定义一个空数组存放名称和标签
const nameArr = [];
//forEach遍历没有返回值
arrStr.forEach(item =>{
    const temp = <h5 key={item}>{item}</h5>;
    nameArr.push(temp)
});



//创建虚拟节点
const mydiv = <div id="mydiv">
    <div>JSX基础语法</div><hr/>
    <div>表达式：{100+100}</div><hr/>
    <div>变量+数字：{a}</div><hr/>
    <div>字符串：{str}</div><hr/>
    <div>三元表达式：{boo > 0 ? 'YES' : 'NO' }</div><hr/>
    <div>注释：{/*注释...*/}</div><hr/>
    <div title={title}>渲染属性：{title}</div><hr/>
    <div>渲染元素：{span}</div><hr/>
    <div>JSX数组：{arr}</div><hr/>
    <div>普通字符串数组转为JSX数组并渲染到页面方案1：{nameArr}</div><hr/>
    <div>普通字符串数组转为JSX数组并渲染到页面方案2：{arrStr.map(item =>{return <h4 key={item}>{item}</h4>})}</div><hr/>
    <div className="study">react中className替换class，原因class是JavaScript的关键字</div><hr/>
    <label htmlFor="ooo">react中htmlFor替换for，原因for是JavaScript的关键字</label><hr/>
</div>;


ReactDom.render(mydiv,document.getElementById('root')); // render渲染节点

```
