--- 
title: ajax封装
date: 2018-12-28
tags: 
 - JavaScript
categories:
  - JavaScript
---
# ajax封装
#### html
```html
 <button id="button">请求纯文本</button>
 
 	<br><br>
 
 	<div id="text"></div>
 	
 	<div id="text1"></div>

```

#### js
```js
var button = document.getElementById('button');
 		
 		var text = document.getElementById('text');
 		
 		var text1 = document.getElementById('text1');
 		
 		button.addEventListener("click",loadText);
 
 		function loadText(){ // click事件
 			// ajax调用 .txt文件
 			ajax({url:"sample.txt",type:"get",datatype:"text"}).then(function(res){ text.innerHTML = res;});	
 		}
 			//  ajax调用 .json文件
 			ajax({url:"user.json",type:"get",datatype:"json"}).then(function(res){ 
 				//let user = JSON.parse(JSON.stringify(res)); 
 				// json对象转为json字符串，调用JSON.stringify()方法,json字符串转json对象,调用JSON.parse方法
 				let user = res; //这里不需要转换,Promise返回的就是一个对象
 				let output = '';
 					output +=
 					`<ul>
 						<li>${user.id}</li>
 						<li>${user.name}</li>
 						<li>${user.email}</li>
 					</ul>`;
 						text1.innerHTML = output;
 						console.log(output)
 			});
 
 		function ajax({url="",type="",datatype=""}){ //ajax封装
 			
 			return new Promise ((resolve,reject) =>{ // Promise封装ajax,最后返回一个Promise对象
 				
 				var xhr = new XMLHttpRequest(); // 创建xhr对象
 				
 				xhr.open(type,url,true);
 				
 				xhr.responseType = datatype;
 				
 				xhr.onprogress = function(){ //状态1,2,3,4
 					
 					 //console.log(xhr.readyState);
 				}
 				
 				xhr.onreadystatechange = function(){ 	//onreadystatechange请求方式
 					if (this.status===200 && this.readyState===4) {
 							resolve(xhr.response);
 					}
 					else if(this.status===404){
 							console.log("404")
 					}
 					
 				}
 				
 				xhr.onerror = function (err) {
 					reject(err)
 				}
 				xhr.send(); // 发送请求
 			})
 		}
```
