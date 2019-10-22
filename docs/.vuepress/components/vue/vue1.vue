<template>
    <div class="vue">
        <button class="but" @click="healdleClick">按钮</button>
        <div class="show" v-if="show">哈哈！我来了</div>
        <div class="show" v-else="">嘻嘻！我走了</div>
    </div>
</template>

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

<style scoped>
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
</style>
