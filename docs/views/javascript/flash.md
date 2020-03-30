--- 
title: 轮播图
date: 2018-12-28
tags: 
 - JavaScript
categories:
  - JavaScript
---
# 轮播图
### html
```haml

<div id="flash">
  <ul id="pic">
    <li><img src="amige/1.jpg" alt=""></li>
    <li><img src="amige/2.jpg" alt=""></li>
    <li><img src="amige/3.jpg" alt=""></li>
    <li><img src="amige/4.jpg" alt=""></li>
    <li><img src="amige/5.jpg" alt=""></li>
    <li><img src="amige/6.jpg" alt=""></li>
  </ul>
  <ol id="num">
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
  </ol>
  <a  id="left" class="arrow"><</a>
  <a  id="right" class="arrow">></a>
</div>

```
### css
```css

    #flash{height: 454px;width: 730px;margin: 100px auto;position: relative;cursor: pointer;}

    #pic li{display: none;z-index: 1;position: absolute;top:0;left: 0;}

    #pic li:nth-child(1){display: block;}

    #num{position: absolute;left: 40%;bottom: 10px;z-index: 2;cursor:default;margin:0;padding:0;}

    #num li{background-color: #666;float: left;width: 20px;height: 20px;border-radius: 50%;cursor: pointer;

    list-style: none;margin: 3px;text-align: center;color: white;line-height: 20px;}

    #num li.active{background-color: #f00; }

    a{text-decoration: none;color: white;}

    .arrow{height: 60px;width: 30px;line-height: 60px;text-align: center;

      position: absolute;top:45%;z-index: 3;display: none;}

    .arrow:hover{background: rgba(0,0,0,0.15);}

    #flash:hover .arrow{display: block;}

    #left{left: 2%;}

    #right{right: 2%;}

```
### js

```js
 function $(id) {
      return document.getElementById(id);
    }
    window.onload =function(){
      var index=0;
      var timer;
      var flash=$("flash");
      var left=$("left");
      var right=$("right");
      var pic=$("pic").getElementsByTagName("li");
      var num=$("num").getElementsByTagName("li");
      //right
      right.onclick=function(){
          index ++;
        if(index >=num.length){
          index = 0;
        }
        changeOption(index);
       // console.log(index);
      };
      //left
      left.onclick=function () {
        index --;
        if (index<0){
          index=num.length-1;
        }
        changeOption(index);
       // console.log(index);
      };

      //定时器
      timer =setInterval(run,3000);
      function run() {
        index ++;
        if(index >=num.length){
          index = 0;
        }
        changeOption(index);
        //console.log(index);
      }
      //stop
      flash.onmouseover=function () {
        clearInterval(timer);
      };
      //flash
      flash.onmouseout=function () {
        timer =setInterval(run,3000);
      };
      //手动切换
      for (var i=0;i<num.length;i++){
        num[i].id=i;
        num[i].onmouseover=function () {
          changeOption(index);
          changeOption(this.id);
        }
      }
        //遍历pic num 索引
      function changeOption(index){
        // console.log(index);
        for(var j=0;j<num.length;j++){
          pic[j].style.display="none";
          num[j].className="";
        }
        pic[index].style.display="block";
        num[index].className="active";
      }
    }
```

# 轮播图
::: demo [vanilla]
```html
<html>
  <div id="flash">
  <ul id="pic">
    <li><img src="/tanxi.com/img/1.jpg" alt=""></li>
    <li><img src="/tanxi.com/img/2.jpg" alt=""></li>
    <li><img src="/tanxi.com/img/3.jpg" alt=""></li>
    <li><img src="/tanxi.com/img/4.jpg" alt=""></li>
    <li><img src="/tanxi.com/img/5.jpg" alt=""></li>
    <li><img src="/tanxi.com/img/6.jpg" alt=""></li>
  </ul>
  <ol id="num">
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
  </ol>
  <a  id="left" class="arrow"><</a>
  <a  id="right" class="arrow">></a>
</div>
</html>
<script>
  function $(id) {
      return document.getElementById(id);
    }
    window.onload =function(){
      var index=0;
      var timer;
      var flash=$("flash");
      var left=$("left");
      var right=$("right");
      var pic=$("pic").getElementsByTagName("li");
      var num=$("num").getElementsByTagName("li");
      //right
      right.onclick=function(){
          index ++;
        if(index >=num.length){
          index = 0;
        }
        changeOption(index);
        console.log(index);
      };
      //left
      left.onclick=function () {
        index --;
        if (index<0){
          index=num.length-1;
        }
        changeOption(index);
        console.log(index);
      };

      //定时器
      timer =setInterval(run,3000);
      function run() {
        index ++;
        if(index >=num.length){
          index = 0;
        }
        changeOption(index);
        console.log(index);
      }
      //stop
      flash.onmouseover=function () {
        clearInterval(timer);
      };
      //flash
      flash.onmouseout=function () {
        timer =setInterval(run,3000);
      };
      //手动切换
      for (var i=0;i<num.length;i++){
        num[i].id=i;
        num[i].onmouseover=function () {
          changeOption(index);
          changeOption(this.id);
        }
      }
        //遍历pic num 索引
      function changeOption(index){
        // console.log(index);
        for(var j=0;j<num.length;j++){
          pic[j].style.display="none";
          num[j].className="";
        }
        pic[index].style.display="block";
        num[index].className="active";
      }
    }
</script>
<style>
#flash{height: 454px;width: 730px;margin: 0 auto;position: relative;cursor: pointer;}

#pic li{display: none;z-index: 1;position: absolute;top:0;left: 0;}

#pic li:nth-child(1){display: block;}

#num{position: absolute;left: 40%;bottom: 10px;z-index: 2;cursor:default;margin:0;padding:0;}

#num li{background-color: #666;float: left;width: 20px;height: 20px;border-radius: 50%;cursor: pointer;

list-style: none;margin: 3px;text-align: center;color: white;line-height: 20px;}

#num li.active{background-color: #f00; }

a{text-decoration: none;color: white;}

.arrow{height: 60px;width: 30px;line-height: 60px;text-align: center;

  position: absolute;top:45%;z-index: 3;display: none;}

.arrow:hover{background: rgba(0,0,0,0.15);}

#flash:hover .arrow{display: block;}

#left{left: 2%;}

#right{right: 2%;}
</style>
:::
