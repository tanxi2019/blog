--- 
title: 字体
date: 2019/10/26
tags: 
 - css
categories:
  - css
---

# 字体

::: tip font
css字体样式
:::

+ font-family 
+ font-size
+ font-weight
+ font-style
+ font-variant
+ color
+ line-height

## 字体font-family

+ 微软雅黑	Microsoft YaHei
+ 宋体	SimSun
+ 楷体_GB2312	KaiTi_GB2312
+ 隶书	LiSu
+ 黑体	SimHei
+ 华文细黑	STXihei
+ 细明体	MingLiU
+ 新细明体	PMingLiU

```css
font-family:Microsoft YaHei;
```

## font-size字体大小

```css
font-size: 18px;
```
## color字体颜色

+ 使用预定义的颜色的值，如 red、green、blue 等颜色；
+ 十六进制，如 #FF0000，#FF6600，#29D794等。实际工作中，十六进制是最常用的定义颜色的方式；
+ RGB代码，如红色可以表示为rgb(255,0,0)或rgb(100%,0%,0%)，如果使用RGB代码的百分比颜色值，取值为0时也不能省略百分号，必须写为0%。
+ RGBA：在原来 RGB 颜色的基础上增加了 Alpha 通道，可以定义文本的透明的颜色。如：color:rgba(255,0,0.5) ; 就可以定义半透明的红色；
+ HSL：该颜色表示法是使用色相（H）、饱和度（S）和亮度（L）来表示颜色的一种方法。如：color:hsl(0,100%,100%); 就表示红色；
+ HSLA：在原来 HSL 颜色的基础上增加了 Alpha 通道。如：color:hsla(0,100%,100%,.5); 就表示半透明的红色。


```css
color:red;
```
## font-weight 体粗细

+ normal  表示默认值，即正常的字体，相当于取值为 400；
+ 字体的粗细，是对字体粗细的一种量化方式，值越大就表示越粗，值越小就越细。
+ 一般来说，更喜欢用数字来表示字体的粗细，取值范围（100~900）

```css
font-weight: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

```

## font-style 字体风格

+ normal 表示默认值，即正常的字体；
+ italic 表示斜体，是一种简单的字体风格，对每个字母的结构有一些小改动，来反映变化的外观
+ oblique 表示倾斜的字体，是正常竖直文本的一个倾斜版本。

```css
font-style: normal | italic | oblique;
```

## 　text-decoration 字体下划线

+ normal 表示默认值，即无装饰字体；
+ underline 表示下划线效果；
+ blink 表示闪烁效果；
+ overline 表示上划线效果；
+ line-through 表示贯穿线效果。

```css
text-decoration: none | underline | blink | overline | line-through;
```
## font-variant 字体大小写效果

+ font-variant 属性来定义字体大小效果。
+ mall-caps 表示小型的大写字母字体；
+  该属性仅支持英文

```css
font-variant:normal | small-caps;
```
## 扩展text-transform字体大小写效果

+ normal 表示默认值，无转化发生；
+ capitalize 表示将每个单词的第一个字母转换成大写，其余无转换发生；
+  upppercase 表示把所有字母都转化成大写；
+ lowercase 表示把所有字母都转化成小写。　

```css
text-transform:none | capitalize | uppercase | lowercase;
```
## line-height 行高

```css
height:30px;
line-height:30px;

```

