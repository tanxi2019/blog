--- 
title: 切换效果一
date: 2020/2/1
tags: 
 - JavaScript
categories:
  - JavaScript
---

# tab切换 <Badge text="1.0" type="warning"/>

::: demo [vanilla]
```html
<html>
  <div class="bgbox">
    <ul class="tab-top" id="tabcilk">
        <li class="active"><a>1</a></li>
        <li><a>2</a></li>
        <li><a>3</a></li>
        <li><a>4</a></li>
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
</html>
<script>
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
</script>
<style>
 * { margin: 0; padding: 0; }
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
.tabbox .boxlist {display: none;    text-align: center;float: left;margin-left: 10px;width: 45%;height:166px;border: 1px solid #ccc;background: pink;}
.active {color: red;background: #1890ff;}
.bgbox .right .right_1{color: black;display: none;float: left;margin-left: 10px;width: 25%;height:166px;border: 1px solid #ccc;background: #e6ff13;}
</style>
:::
