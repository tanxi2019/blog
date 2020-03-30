--- 
title: class继承公共方法
date: 2020/2/15
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
    sayHello(){ // 实例方法
        console.log('hello');
    }
}
//子类American，extends继承父类Person
//如果子类继承了父类，那么子类的构造器必须执行super()，super()是父类的构造器的引用
class American extends Person{
    constructor (name,age) {
        super(name,age);
    }
}

// 实例对象
const a1 = new American('jack',18);
console.log(a1);
a1.sayHello();// 实例方法

//子类Chinese，extends继承父类Person
//name:名字
//age:年龄
//IDnumber:身份证【中国人独有】
class Chinese extends  Person{
    constructor (name,age,IDnumber) {
        super(name,age);
        // 语法规范，在子类中this只能放到super()之后使用
        this.IDnumber = IDnumber;
    }
}

// 实例对象
const c1 = new Chinese('小三',18,422802199801303915);
console.log(c1);
c1.sayHello();// 实例方法
```
