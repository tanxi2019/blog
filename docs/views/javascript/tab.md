--- 
title: 切换效果
date: 2020-2-1
tags: 
 - JavaScript
categories:
  - JavaScript
---

# tab切换 <Badge text="1.0" type="warning"/>


::: demo [vanilla]
```html
<html>
  <div class="wrap">
    <div class="container-top" id="list">
        <ul>
            <li class="active">论坛</li>
            <li>博客</li>
            <li>交流</li>
            <li>社区</li>
            <li>反馈</li>
        </ul>
    </div>
    <div class="container-bottom" id="item">
        <div class="con" style=" display:block;">论坛</div>
        <div class="con">博客</div>
        <div class="con">交流</div>
        <div class="con">社区</div>
        <div class="con">反馈</div>     
    </div>
</div>
</html>
<script>
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
</script>
<style>

a{ color:#fff; font-size:13px; display:block; } a:hover{ color:#ccc; }
.wrap{ margin:60px auto; width:270px; height:auto; }
.container-top{ height:30px; }
.container-bottom{ height:60px; overflow:hidden; width:270px; background-image:linear-gradient(to right,#FF00FF,#E066FF);}
.container-top ul{ padding-left: 0; }
.container-top ul li{ cursor: pointer;float:left; width:54px; height:30px; line-height:30px; text-align:center;background-color:#ccc; list-style-type: none;}
.active{ background-image:linear-gradient(to right,dimgray,gray); }
.con{ display:none;text-align: center;margin: 15px 0;}
</style>
:::
