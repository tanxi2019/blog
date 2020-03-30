--- 
title: class继承
date: 2020/2/10
tags: 
 - react
categories:
 - react
---

# class继承

```js
//父类
class Person {
    constructor(name,age){//构造器
        this.name = name; //实例属性
        this.age = age;//实例属性
    }
}
//子类American，extends继承父类Person
class American extends Person{}

// 实例对象
const a1 = new American('jack',18);
console.log(a1);

//子类Chinese，extends继承父类Person
class Chinese extends  Person{}

// 实例对象
const c1 = new Chinese('小三',18);
console.log(c1);
```
