--- 
title: sort排序
date: 2018-12-28
tags: 
 - JavaScript
categories:
  - JavaScript
---
# sort排序
```css

```
```html

```
```js
  var array1 = ["c","a","b","d"];
        var array2 = [2,3,1,4];
       // array1.sort();//方法以字母顺序对数组进行排序
        array1.reverse();//反转元素顺序
        array2.sort((a,b) =>{ return a - b });//数字排序(升序)
       // array2.sort((a,b) =>{ return b - a });//数字排序（降序）
        console.log(array1);
        console.log(array2);
```

