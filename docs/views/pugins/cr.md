--- 
title: 插件
date: 2019/10/10
tags: 
 - pugins
categories:
 - pugins
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

