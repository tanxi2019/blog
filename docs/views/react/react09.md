--- 
title: class 关键字创建react组件【有状态组件】
date: 2020/2/16
tags: 
 - react
categories:
 - react
---

# class 关键字创建react组件【有状态组件】

```js
// class 关键字创建组件【有状态组件】
import React from 'react'; // 创建组件，虚拟dom,生命周期；
import ReactDom from 'react-dom'; // 把创建好的组件，虚拟dom显示在页面

class Movie extends React.Component{ // 继承
    constructor () { // 构造器
        super (); // 语法规范，在子类中this只能放到super()之后使用
        this.state = { // state，相当于vue里data(){return{}}
            msg:'hello world'
        };
    }
    render(){
        return <div>
            <h4>Movie组件</h4>
            <div>{this.props.name}</div>
            <div>{this.props.age}</div>
            <div>{this.props.gender}</div>
            <div>{this.state.msg}</div>
        </div>
    }
}

const user = {
    name:'谭先生',
    age:21,
    gender:'男'
};

ReactDom.render(<div>
    <Movie name={user.name} age={user.age} gender={user.gender}></Movie><hr/>
    <Movie {...user}></Movie>
</div>,document.getElementById('app')); // render渲染节点
```
