--- 
title: 冒泡排序
date: 2018/12/28
tags: 
 - JavaScript
categories:
  - JavaScript
---
# 冒泡排序
```js
 const array = [ 7 ,2, 4, 1, 3, 5, 8, 9, 6];
            for(let i =0; i<array.length-1; i++){
                    for(let j=0; j<array.length-1-i; j++){
                        if (array[j] > array[j+1]){
                            let temp = 0;
                            temp = array[j];
                            array[j] = array[j+1];
                            array[j+1] = temp;
                        }
                        // console.log(array);
                    }
                }
              console.log(array); 

```

