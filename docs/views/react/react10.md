--- 
title: 评论列表
date: 2020-02-12
tags: 
 - react
categories:
 - react
---

# 评论列表

```js
import React from 'react'; // 创建组件，虚拟dom,生命周期；
import ReactDom from 'react-dom'; // 把创建好的组件，虚拟dom显示在页面

// 创建子组件
function CmtItem(props) {
    return  <div>
        <h4>评论人：{props.user}</h4>
        <p>评论内容：{props.content}</p>
    </div>
}

// 创建父组件
class Cmtlist extends React.Component{
    constructor () {
        super ();
        this.state = {
            ComponentList:[ // 评论列表数据
                {id:1,user:'火舞',content:'哈哈，沙发'},
                {id:2,user:'小舞',content:'哈哈，板凳'},
                {id:3,user:'朱竹清',content:'哈哈，凉席'},
                {id:4,user:'宁荣荣',content:'哈哈，砖头'},
                {id:5,user:'水冰儿',content:'哈哈，活捉楼上'},
            ]
        };
    }
    render () {
        return <div>
            <h2>评论列表组件</h2>
            <div>{this.state.ComponentList.map(item =>{return <CmtItem {...item} key={item.id}></CmtItem>})}</div>
        </div>
    }
}

ReactDom.render(<div>
    <Cmtlist></Cmtlist>
</div>,document.getElementById('app')); // render渲染节点
```
