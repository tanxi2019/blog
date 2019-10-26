--- 
title: 背景
date: 2018/10/10
tags: 
 - css
categories:
  - css
---
# 背景

::: tip background
CSS3中包含几个新的背景属性，提供更大背景元素控制。
在本章您将了解以下背景属性：
:::

+ background-image
+ background-size
+ background-origin
+ background-clip

## background-image

::: tip
CSS3中可以通过background-image属性添加背景图片。
不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。
背景图片绝对路径。
:::

```css
        background-image: url(/css/bg2.png),url(/css/bg1.jpg);
        background-position: right bottom, left top;
        background-repeat: no-repeat, repeat;
        padding: 15px;
```
:point_down:下面是background-image实时效果：

<bg1/>

::: tip
ye可以给不同的图片设置多个不同的属性,效果一样
:::

```css
       background: url(/css/bg2.png) right bottom no-repeat,url(/css/bg1.jpg) left top repeat;
        padding: 15px;
```

<bg2/>

## background-size

::: tip
background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。
CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。
你指定的大小是相对于父元素的宽度和高度的百分比的大小。
:::

```css
    background:url(/css/bg2.png);
	background-size:80px 60px;
	background-repeat:no-repeat;
	padding-top:40px;
```
:point_down:下面是background-size实时效果：

<bg3/>

## background-origin

::: tip
background-Origin属性指定了背景图像的位置区域。
content-box, padding-box,和 border-box区域内可以放置背景图像。
:::
```css
       
        /*background-Origin:  border-box;*/
        /*background-Origin: padding-box;*/
         background-Origin: content-box;
        
```

![background-origin](/css/background-origin.png) 

## background-clip

::: tip
CSS3中background-clip背景剪裁属性是从指定位置开始绘制。
:::

```css
        border: 10px solid black;
        padding:35px;
        background: #eee;
        /*background-clip:  border-box;*/
        /*  background-clip: padding-box;*/
         background-clip: content-box;
        
```

:point_down:下面是background-clip实时效果：
<bg4/>




