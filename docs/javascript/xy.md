# 显隐
#### url判断显隐
```js
 //直接用网络地址判断显隐
  var a = location.href;
  if(a="http://en.brainvta.com/"){ //首页地址http://en.brainvta.com/
   console.log("yes",a); 
   document.getElementById("top").style.display='none';
   }
  else{
   console.log("no",a);
   document.getElementById("top").style.display='block'; 
   }

```

#### 单个事件显隐

```html
<button id="but" value="true">显隐状态</button>
  <p id="p">我来了</p >
  <p id="p1" style="display: none;">我不见了</p >
```

```js
window.onload = function(){
    function $(id){
     return  document.getElementById(id);
    }
    let but = $("but");
    let p = $("p");
    let p1 = $("p1");
    but.addEventListener('click',butt)
    function butt(){
     if(this.value=='true'){
      p.style.display='none';
      p1.style.display='block';
      this.value=false;
     }else {
      p.style.display='block';
      p1.style.display='none';
      this.value=true;
     }
    }
    // but.onclick = function(){
    //  if(this.value=='true'){
    //   p.style.display='none';
    //   p1.style.display='block';
    //   this.value=false;
    //  }else {
    //   p.style.display='block';
    //   p1.style.display='none';
    //   this.value=true;
    //  }
    //  console.log(but)
     //}
    }
```
#### 延迟显隐

```html
<div id="time">5</div>
<img src="img/1.png" alt="" id="pic" style="display: none;">
```
```js
 window.onload = function () {
        var timer =  setInterval(run, 1000);//定义定时器
        function run() {
            document.getElementById("time").innerText -= 1;
            if( document.getElementById("time").innerText === "0"){// 判断
                clearInterval(timer); // 清除定时器
                document.getElementById("pic").style.display = "inline-block";//显示图片
                document.getElementById("time").style.display = "none";// 隐藏时间
            }
        }
    }
```
#### mouseout mouseover显隐

```html
<div class="cont">
<a id="aa">滑过移开效果</a>
<div class="but1" id="but"><img src="img/1.png" alt=""></div>
</div>
```
```css
  .cont{margin: auto;background: white; width: 200px;height: 300px;}
  .but1{color: red;font-size: 12px;background: #1cf50f;width:200px;height:200px;display: none;}
  .cont a{ background-color: #4CAF50;color: white;border: 1px solid #ccc;border-radius: 5px;padding: 15px 49px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;}
  .cont a:hover{color: black;background: #0fedaf;}
  .cont img{width: 100%;height: 100%;}
```
````js
 var aa =document.getElementById("aa");
            var but =document.getElementById("but");
            aa.onmouseout=function () {
                but.style.display="none";
            } 

            aa.onmouseover =function () {
                but.style.display="block";
            } 
````

