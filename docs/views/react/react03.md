--- 
title: 创建react组件
date: 2020/2/10
tags: 
 - react
categories:
 - react
---

# 创建react组件方案一

#### 修改index.js

```js
import React from 'react'; // 创建组件，虚拟dom,生命周期；
import ReactDom from 'react-dom'; // 把创建好的组件，虚拟dom显示在页面

//创建组件方案1
/**
 * @return {null}
 */
function Hello (props){
    console.log(props);
    // return null
    return <div>
        <h4>这是一个Hello组件</h4>
        <div>{props.name}</div>
        <div>{props.age}</div>
        <div>{props.gender}</div>
    </div>
}

const dog = {
    name:'大黄',
    age:3,
    gender:'雄'
};

ReactDom.render(<div>
    <Hello name={dog.name} age={dog.age} gender={dog.gender}/><hr/>
    <Hello {...dog}></Hello>
</div>,document.getElementById('root')); // render渲染节点

```
