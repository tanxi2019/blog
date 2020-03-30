--- 
title: vue指令
date: 2019-10-22
tags: 
 - Vue
categories:
 - Vue
---
::: tip vue 指令大补汤

vue 指令 v-on,v-if,v-else

:::
```haml
 <template>
    <div class="vue">
        <button class="but" @click="healdleClick">按钮</button>
        <div class="show" v-if="show">哈哈！我来了</div>
        <div class="show" v-else="">嘻嘻！我走了</div>
    </div>
</template>
```

```js
<script>
export default {
    name: "vue1",
    data () {
         return {
             show:true
         }
    },
    methods: {
        healdleClick:function () {
            console.log("测试");
            this.show===true ?  this.show = false : this.show = true; //写法1 ，三元表达式
            //  this.show = this.show !== true; // 写法2 ，if判断的转化
            // if(this.show===true){ //写法3 ，if判断
            // this.show = false
            // }else{
            //this.show = true
            // }

         }
    }
    }
</script>
```
```css
.but{
    display: block;
    margin: 0 auto;
}
.show{
    width: 200px;
    height: 100px;
    background-color: #f9a7a7;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    letter-spacing: 2px;
    text-shadow: 0.1em 0.1em #333;
    margin: 0 auto;
    border-radius: 5px;
    line-height: 100px;
    box-shadow: 10px 10px 5px #888888;
}
```
:point_down:下面是实时效果：
<vue1/>
