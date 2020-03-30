--- 
title: 评论列表分离
date: 2019-10-12
tags: 
 - react
categories:
 - react
---

# 评论列表分离

#### index.js
```js
import React from 'react'; // 创建组件，虚拟dom,生命周期；
import ReactDom from 'react-dom'; // 把创建好的组件，虚拟dom显示在页面

// 导入法组件
import Cmtlist from '@/components/Cmtlist'


ReactDom.render(<div>
   <Cmtlist></Cmtlist>		
</div>,document.getElementById('root')); // render渲染节点
```
#### Cmtlist.js

```js
import React from 'react'; // 创建组件，虚拟dom,生命周期；
//导入css
import '@/css/Cmtlist.scss'
// 导入组件
import CmtItem from '@/components/CmtItem'


// 创建父组件
export default class Cmtlist extends React.Component{
    constructor () {
        super ();
        this.state = {
            ComponentList:[ // 评论列表数据
                {id:1,user:'小舞',content:'哈哈，沙发'},
                {id:2,user:'火舞',content:'哈哈，板凳'},
                {id:3,user:'朱竹清',content:'哈哈，凉席'},
                {id:4,user:'宁荣荣',content:'哈哈，砖头'},
                {id:5,user:'水冰儿',content:'哈哈，活捉楼上'},
            ]
        };
    }
    render () {
        return <div>
            <h2 className="title">评论列表组件</h2>
            <div>{this.state.ComponentList.map(item =>{return <CmtItem {...item} key={item.id}></CmtItem>})}</div>
        </div>
    }
}
```

#### Cmtlist.scss

```css
// 这里我用了sass预处理器,也可以直接用css，react和vue的开发不建议直接用css。
$myColor: red;
$myFontSize: 35px;
.title{font-size: $myFontSize; color: $myColor; text-align: center;font-weight: 200;}
```

#### CmtItem.js
```js
import React from 'react'; // 创建组件，虚拟dom,生命周期；
import '@/css/CmtItem.scss'
// 创建子组件
export default function CmtItem(props) {
    return  <div className="item">
        <h4 className="user">评论人：{props.user}</h4>
        <p className="content">评论内容：{props.content}</p>
    </div>
}
``` 

#### CmtItem.scss

```css
// 这里我用了sass预处理器,也可以直接用css，react和vue的开发不建议直接用css。
.item{
	border:1px solid #ccc;
	margin:10px;padding:10px;
	box-shadow:0 0 10px #ccc;
	.user{font-size:14px;}
	.content{font-size: 12px;}
	}
```

