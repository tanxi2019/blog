--- 
title: 渐变
date: 2019/10/26
tags: 
 - css
categories:
  - css
---


::: tip CSS3 渐变
CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。
:::

+ 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
+ 径向渐变（Radial Gradients）- 由它们的中心定义

## 线性渐变

```html
    <h3>线性渐变 - 从上到下</h3>
    <p>从顶部开始的线性渐变。起点是红色，慢慢过渡到蓝色：</p>
    <div class="grad1"></div>
    <p><strong>注意：</strong> Internet Explorer 9 及之前的版本不支持渐变。</p>
```
```css
.grad1 {
        height: 200px;
        background-color: red; /* 浏览器不支持时显示 */
        background-image: linear-gradient(#e66465, #9198e5);
    }
```
:point_down:效果图实现：

<shade1/>

```html
     <h3>线性渐变 - 从左到右</h3>
     <p>从左边开始的线性渐变。起点是红色，慢慢过渡到蓝色：</p>
     <div class="grad2"></div>
     <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>
```
```css
 .grad2 {
        height: 200px;
        background-color: red; /* 不支持线性的时候显示 */
        background-image: linear-gradient(to right, red , yellow);
    }
```
:point_down:效果图实现：
<shade2/>

```html
  <h3>线性渐变 - 对角</h3>
      <p>从左上角开始（到右下角）的线性渐变。起点是红色，慢慢过渡到黄色：</p>
      <div class="grad3"></div>
      <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>
```
```css
 .grad3{
        height: 200px;
        background-color: red; /* 不支持线性的时候显示 */
        background-image: linear-gradient(to bottom right, red , yellow);
    }
```
:point_down:效果图实现：
<shade3/>

#### 使用角度
::: tip
角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。
:::
+ background-image: linear-gradient(angle, color-stop1, color-stop2);

```html
   <h3>线性渐变 - 使用不同的角度</h3>
      <div class="grad1" style="text-align:center;">0deg</div><br>
      <div class="grad2" style="text-align:center;">90deg</div><br>
      <div class="grad3" style="text-align:center;">180deg</div><br>
      <div class="grad4" style="text-align:center;">-90deg</div>
      <p><strong>注意：</strong> Internet Explorer 9 及之前的版本不支持渐变。</p>
      ​
```
```css
    .grad1 {
         height: 100px;
         background-color: red; /* 浏览器不支持的时候显示 */
         background-image: linear-gradient(0deg, red, yellow);
     }
     .grad2 {
         height: 100px;
         background-color: red; /* 浏览器不支持的时候显示 */
         background-image: linear-gradient(90deg, red, yellow);
     }
     .grad3 {
         height: 100px;
         background-color: red; /* 浏览器不支持的时候显示 */
         background-image: linear-gradient(180deg, red, yellow);
     }
     .grad4 {
         height: 100px;
         background-color: red; /* 浏览器不支持的时候显示 */
         background-image: linear-gradient(-90deg, red, yellow);
     }
```
:point_down:效果图实现：
<shade5/>
#### 使用多个颜色结点
```haml
  <h3>3 个颜色结点（均匀分布）</h3>
    <div class="grad1"></div>

    <h3>7 个颜色结点（均匀分布）</h3>
    <div class="grad2"></div>

    <h3>3 个颜色结点（不均匀分布）</h3>
    <div class="grad3"></div>

    <p><strong>注意：</strong> 当指定百分比时，颜色是不均匀分布。</p>
    <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>
```
```css
  .grad1 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(red, green, blue); /* 标准的语法（必须放在最后） */
    }
    .grad2 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(red, orange, yellow, green, blue, indigo, violet); /* 标准的语法（必须放在最后） */
    }
    .grad3 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(red 10%, green 85%, blue 90%); /* 标准的语法（必须放在最后） */
    }
```
:point_down:效果图实现：
<shade4/>

#### 带有彩虹颜色和文本的线性渐变

```haml
<div class="grad1>
        渐变背景
    </div>
    <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>
```
```css
   .grad1 {
        line-height: 55px;
        text-align: center;
        margin:auto;
        color:#888888;
        font-size:40px;
        font-weight:bold;
        height: 55px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); /* 标准的语法（必须放在最后） */
    }
```

:point_down:效果图实现：
<shade6/>

#### 使用透明度（transparent）


```haml
 <h3>线性渐变 - 透明度</h3>
    <p>为了添加透明度，我们使用 rgba() 函数来定义颜色结点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。</p>

    <div class="grad1"></div>

    <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>
```
```css
  .grad1 {
        height: 200px;
        background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
    }
```

:point_down:效果图实现：
<shade7/>

#### 重复的线性渐变
+  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);

```html
<h1>重复的线性渐变</h1>
​
<div class="grad1"></div>
​
<p>45deg:</p>
<div class="grad2"></div>
​
<p>190deg:</p>
<div class="grad3"></div>
​
<p>90deg:</p>
<div id="grad4"></div>
​
<p><strong>注意:</strong> Internet Explorer 9 及更早版本的 IE 浏览器不支持线性渐变。</p>
​
```
```css
 .grad1 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
    }

    .grad2 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: repeating-linear-gradient(45deg,red,yellow 7%,green 10%);
    }

    .grad3 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: repeating-linear-gradient(190deg,red,yellow 7%,green 10%);
    }

    .grad4 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: repeating-linear-gradient(90deg,red,yellow 7%,green 10%);
    }
```

:point_down:效果图实现：
<shade8/>

## 径向渐变

+ background-image: radial-gradient(shape size at position, start-color, ..., last-color);

```html
<div class="grad1"></div>
```
```css
 .grad1 {
        height: 150px;
        width: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: radial-gradient(red, green, blue); /* 标准的语法（必须放在最后） */
    }
```

:point_down:效果图实现：
<shade9/>

```html
 <div id="grad1"></div>
```
```css
 .grad1 {
        height: 150px;
        width: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: radial-gradient(red 5%, green 15%, blue 60%); /* 标准的语法（必须放在最后） */
    }
```
:point_down:效果图实现：
<shade10/>

#### 设置形状

::: tip
shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。

:::

+  background-image: radial-gradient(circle, red, yellow, green);






