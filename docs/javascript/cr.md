--- 
title: 插入排序
date: 2017-12-28
tags: 
 - JavaScript
---
# 插入排序
```js
  const array = [ 7 ,2, 4, 1, 3, 5, 8, 9, 6];
             for (let i =1; i<array.length; i++){
                 for (var j = i;j >0 && array[j-1]>array[j];j--){
                    var  temp = array[j];
                    array[j] = array[j-1];
                    array[j-1] =temp;
                     }
                 console.log(array);
                 }

```

