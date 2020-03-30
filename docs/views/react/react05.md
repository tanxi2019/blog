--- 
title: class的简单应用
date: 2020-02-10
tags: 
 - react
categories:
 - react
---

# class的简单应用
```js
// class的简单应用
//console.log('OK');
//传统面向对象方式
function Person(name,age) {
    this.name=name;
    this.age=age;

}
// 实例属性：通过new出来的实例，访问到的属性
// 静态属性：通过构造函数，访问到的属性

Person.info='123456'; // info属性直接挂载给了构造函数，属于静态属性
const  p1 = new Person('谭先生',21,'男');
console.log(p1);
console.log('实例属性',p1.name); // 实例属性
console.log('实例属性',p1.age); // 实例属性
console.log('静态属性',Person.info); // 静态属性








console.log('__________________________________________________________');

//class面向对象的使用
// 定义一个动物类
class Animal {
    // 构造器 constructor(){},相当于构造函数；
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static info = '123456';
}
const  a1 = new Animal('大黄',3);
console.log(a1);
console.log('实例属性',a1.name);// 实例属性
console.log('实例属性',a1.age);// 实例属性
console.log('静态属性',Animal.info); // 静态属性
```
