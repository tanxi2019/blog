--- 
title: 渐变
date: 2019/10/26
tags: 
 - css
categories:
  - css
---

## 渐变
::: tip CSS3 渐变
CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。
:::

+ 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
+ 径向渐变（Radial Gradients）- 由它们的中心定义
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
<shade4/>


