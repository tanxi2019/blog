--- 
title: 闭包的使用
date: 2018/12/28
tags: 
 - JavaScript
categories:
 - JavaScript
---
# 闭包的使用
```js
 (function IIFE(){ //IIFE 立即回调
		
			console.log( "Hello!");
		})(); // "Hello!"
		
		function IIFE(){ // 普通回调
		
			console.log( "Hello!");
		} // "Hello!"
		IIFE()
		
		for(var i=1;i<=5;i++){
			setTimeout(function timer(){
			console.log(i) // 打印 5 5 5 5 5
			}, i*1000)
		}
	
		// 方式1
		for(var i=1;i<=5;i++){
			(function(){
				var j = i;
				setTimeout(function timer(){
				console.log(j) // 打印 1 2 3 4 5
				},i*1000)
			})()
			}
		
		// 方式2	
		for(var i=1;i<=5;i++){  
			(function(j){
				setTimeout(function timer(){
				console.log(j)  // 打印 1 2 3 4 5
			},i*1000)
			})(i)
			}
		
		// 方式3		
		for(let i=1;i<=5;i++){ 
			setTimeout(function timer(){
			console.log(i)  // 打印 1 2 3 4 5
			},i*1000)
				}

```
::: tip
推荐第三种写法let,解决for循环i的全局定义变为块级定义
:::

