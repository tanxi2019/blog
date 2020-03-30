--- 
title: class与传统面向对象的对比
date: 2020-02-10
tags: 
 - react
categories:
 - react
---

# class与传统面向对象的对比

```js
//传统面向对象方式
function Person(name,age) {
    this.name=name; // 实例属性
    this.age=age; // 实例属性
}
// 实例属性：通过new出来的实例，访问到的属性
// 静态属性：通过构造函数，访问到的属性

Person.info='123456'; // info属性直接挂载给了构造函数，属于静态属性

// 实例方法
Person.prototype.say = function () { // 实例方法say挂载到原型对象上
    console.log('Person的实例方法');
};

// 静态方法
Person.show = function () {
    console.log('Person的静态方法');
};

const  p1 = new Person('谭先生',21,'男');
console.log(p1);
p1.say(); // 实例方法
Person.show(); //静态方法

console.log('__________________________________________________________');

//class面向对象的使用
// 定义一个动物类
class Animal {
    // 构造器 constructor(){},相当于构造函数；
    constructor(name,age){
        this.name=name; // 实例属性
        this.age=age; // 实例属性
    }
    static info = '123456'; // 静态属性

    jiao (){ // 实例方法
        console.log('实例方法')
    }
    static show (){ // 静态方法
        console.log('静态方法')
    }
}
const  a1 = new Animal('大黄',3);
console.log(a1);
a1.jiao(); // 实例方法
Animal.show();//静态方法
```
