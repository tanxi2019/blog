--- 
title: 事件委托
date: 2018-12-28
tags: 
 - JavaScript
categories:
  - JavaScript
---
# 事件委托

####事件委托1
```html
<ul id="app">
    <li>Walk the dog</li>
    <li>Pay bills</li>
    <li>Make dinner</li>
    <li>Code for one hour</li>
  </ul>
```

```js
 window.onload = function () {
    let app = document.getElementById('app');
      app.addEventListener('click',but,false); // 添加冒泡事件
     function but(event) {
        if (event.target && event.target.nodeName==='LI') {
        let item = event.target;
        console.log('you clicked on item: ' + item.innerHTML)
        }
      }
    }

```
####事件委托2

```html
<ul id="list"></ul>
```

```js
window.onload = function () {
    function loadNode(len) {
      var html = '';
      for (let i = 0; i < 10; i++) {
     html += `<li>${i}</li>`;
      }
      var list = document.getElementById('list');
      list.onclick = function(event) {
     event = event || window.event;
     var target = event.target || event.srcElement;
     if(target.nodeName.toLowerCase() === 'li') {
       console.log(target.innerText);
     }
      }
      list.innerHTML = html;
    }
    loadNode();
       }
```

