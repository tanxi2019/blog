--- 
title: jquery
date: 2019/10/10
tags: 
 - jquery

---
# jquery安装

::: tip jquery 集合
node环境下安装及使用
:::
## 安装
```sh
npm install jquery
```
## 使用

```js
import $ from "jquery";
console.log($)
```
::: tip jquery 集合
其他环境下安装及使用 [jquery](https://jquery.com/download/),本文采用了百度的CDN库,也可以使用其他的CDN库。
:::

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title></title>
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js">
<script>
    $(document).ready(function(){
    $("p").click(function(){
     $(this).hide();
     });
    });
</script>
</head>
<body>
    <p>如果你点我，我就会消失。</p>
    <p>继续点我!</p>
    <p>接着点我!</p>
</body>
</html>

```
