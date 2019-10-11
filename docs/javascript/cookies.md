--- 
title: 缓存
date: 2018/12/28
tags: 
 - JavaScript
categories:
  - JavaScript
---
# 缓存
```js
  window.onload = function(){
     var loacal = document.getElementById("local");
     var session = document.getElementById("session");
     
     // localStorage本地出错,页面关闭再打开状态不改变
     window.localStorage.setItem("lastname1", "localStorage");// localStorage保存数据语法
     local.innerHTML = localStorage.getItem("lastname1"); // 检索
     localStorage.removeItem("lastname1"); // 删除指定键的数据语法：
     localStorage.clear(); // 删除所有数据
     
     // sessionStorage本地出错,页面关闭再打开状态会改变,只是作为临时储存
     window.sessionStorage.setItem("lastname2", "sessionStorage");// sessionStorage保存数据语法
     session.innerHTML = sessionStorage.getItem("lastname2"); // 检索
     //sessionStorage.removeItem("lastname2"); // 删除指定键的数据语法：
     //sessionStorage.clear(); // 删除所有数据
     }

```

