--- 
title: react组件抽离[无状态组件]
date: 2020/2/10
tags: 
 - react
categories:
 - react
---

# react组件抽离

#### 在src目录下创建components文件夹和style文件夹，修改index.js

## index.js

```js
import React from 'react'; // 创建组件，虚拟dom,生命周期；
import ReactDom from 'react-dom'; // 把创建好的组件，虚拟dom显示在页面

// 导入组件
//import Hello from './components/Hello'
// @ 表项目根目录下src的路径
import Hello from '@/components/Hello'

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

## Helo.js 无状态组件
```js
// 构造函数创建组件【无状态组件】
import React from 'react'; // 创建组件，虚拟dom,生命周期；
//直接导出暴露
export default function Hello (props){
    console.log(props);
    // return null
    return <div>
        <h4>这是一个Hello组件</h4>
        <div>{props.name}</div>
        <div>{props.age}</div>
        <div>{props.gender}</div>
    </div>
}

//导出组件，暴露出去
// export default Hello
```
