--- 
title: tab切换
date: 2017-12-28
tags: 
 - JavaScript
categories:
  - JavaScript
---
# tab切换
#### tab1
```css
        *{ margin:0; padding:0; text-decoration:none; list-style:none; }
        a{ color:#fff; font-size:13px; display:block; } a:hover{ color:#ccc; }
        .wrap{ margin:60px auto; width:250px; height:auto; }
        .container-top{ height:30px; }
        .container-bottom{ height:60px; overflow:hidden; }
        .container-top ul{ height:30px; }
        .container-top ul li{ float:left; width:50px; height:30px; line-height:30px; text-align:center;background-color:#ccc; }
        .container-bottom ul{ height:60px; background-image:linear-gradient(to right,#FF00FF,#E066FF); }
        .container-bottom ul li{ width:125px; height:30px; line-height:30px; float:left;text-align:center; background:none; }
        .active{ background-image:linear-gradient(to right,dimgray,gray); }
```
```html
<div class="wrap">
    <div class="container-top" id="list">
        <ul>
            <li><a href="">论坛</a></li>
            <li><a href="">博客</a></li>
            <li><a href="">交流</a></li>
            <li><a href="">社区</a></li>
            <li><a href="">反馈</a></li>
        </ul>
    </div>
    <div class="container-bottom" id="item">
        <div class="con">
            <ul>
                <li><a href="#">论坛A</a></li>
                <li><a href="#">论坛B</a></li>
                <li><a href="#">论坛C</a></li>
                <li><a href="#">论坛D</a></li>
            </ul>
        </div>
        <div class="con">
            <ul>
                <li><a href="#">博客A</a></li>
                <li><a href="#">博客B</a></li>
                <li><a href="#">博客C</a></li>
                <li><a href="#">博客D</a></li>
            </ul>
        </div>
        <div class="con">
            <ul>
                <li><a href="#">交流A</a></li>
                <li><a href="#">交流B</a></li>
                <li><a href="#">交流C</a></li>
                <li><a href="#">交流D</a></li>
            </ul>
        </div>
        <div class="con">
            <ul> <li><a href="#">社区A</a></li>
                <li><a href="#">社区B</a></li>
                <li><a href="#">社区C</a></li>
                <li><a href="#">社区D</a></li>
            </ul>
        </div>
        <div class="con">
            <ul>
                <li><a href="#">反馈A</a></li>
                <li><a href="#">反馈B</a></li>
                <li><a href="#">反馈C</a></li>
                <li><a href="#">反馈D</a></li>
            </ul>
        </div>
    </div>
</div>

```
```js
 //封装通过id来查找元素的函数，不需要引入jquery库;
        function $(id) {
            return document.getElementById(id); //全局定义
        }

        window.onload = function(){
            //获取5个标题名;
            
            var items = $("list").getElementsByTagName("li"); //获取5个内容盒子;
            var	divs = $("item").getElementsByTagName("div");
            //手动切换
            for(var i = 0;i < items.length; i++){
                items[i].index = i;
                items[i].onmouseover = function(){
                    changeOption(this.index);


            };

                function changeOption(index){
                    //console.log(index);
                        for(let j=0; j < items.length; j++){
                            items[j].className = "";
                            divs[j].style.display = "none";
                        }
                             items[index].className = "active";
                             divs[index].style.display = "block";
                    }
            }
        }
```
#### tab2
```css
 * { margin: 0; padding: 0; font-family: "微软雅黑", "Microsoft Yahei",serif; }
        a { text-decoration: none; color: #fff; }
        li { list-style: none;color: black; }
        img { border: 0; }
        .clear { clear: both; height: 0; line-height: 0; }
        body, html { font-family: "微软雅黑", "Microsoft Yahei",serif; font-size: 14px; color: #fff; }
        .all { width: 1200px; margin: 0 auto; overflow: hidden; }
        .bgbox{width: 500px;margin:50px auto;height: 200px;}
        .tab-top {width: 20%;margin:auto;float: left;}
        .tab-top li {width: 100%;line-height: 40px;border: 1px solid #ccc;text-align: center;}
        .tab-top li a{color: black;width: 100%;display: block;}
        .tab-top li a:hover{background-color:  #1890ff;}
        .tabbox .boxlist {display: none;    text-align: center;float: left;margin-left: 10px;width: 50%;height:166px;border: 1px solid #ccc;background: pink;}
        .active {color: red;background: #1890ff;}
        .bgbox .right .right_1{color: black;display: none;float: left;margin-left: 10px;width: 25%;height:166px;border: 1px solid #ccc;background: #e6ff13;}
```
```html
<div class="bgbox">
    <ul class="tab-top" id="tabcilk">
        <li class="active"><a href="/">1</a></li>
        <li><a href="/">2</a></li>
        <li><a href="/">3</a></li>
        <li><a href="/">4</a></li>
    </ul>
    <div class="tabbox" id="tabbox">
        <div class="boxlist " style="display: block;">1</div>
        <div class="boxlist">2</div>
        <div class="boxlist">3</div>
        <div class="boxlist">4</div>
    </div>
   <div class="right" id="right">
       <div class="right_1" style="display: block;">1</div>
       <div class="right_1">2</div>
       <div class="right_1">3</div>
       <div class="right_1">4</div>

   </div>
</div>
```
```js
 window.onload=function () {
        var btn = document.getElementById("tabcilk").getElementsByTagName("li");
        var adiv = document.getElementById("tabbox").getElementsByTagName("div");
        var right = document.getElementById("right").getElementsByTagName("div");

        function tab(btn, boxlist, rig) {
            for (var i = 0; i < btn.length; i++) {
                btn[i].id = i;
         btn[i].onmouseover = function () {
                    for (var j = 0; j < btn.length; j++) {
                        btn[j].className = "";
                        boxlist[j].style.display = "none";
                        rig[j].style.display = "none";
                    }
                       btn[this.id].className = "active";
                       boxlist[this.id].style.display = "block";
                       rig[this.id].style.display = "block";
                }
            }
        }

        tab(btn, adiv, right)
    }
```
