<template>
    <div class="border-radius">
        <p>指定背景颜色元素的圆角:</p>
        <p class="rcorners1">圆角</p>
        <p>指定边框元素的圆角:</p>
        <p class="rcorners2">圆角</p>
        <p>指定背景图片元素的圆角:</p>
        <p class="rcorners3">圆角</p>

        <p>四个值 - border-radius: 15px 50px 30px 5px:</p>
        <p class="rcorners4"></p>

        <p>三个值 - border-radius: 15px 50px 30px:</p>
        <p class="rcorners5"></p>

        <p>两个值 - border-radius: 15px 50px:</p>
        <p class="rcorners6"></p>
    </div>
</template>

<script>
    export default {
        name: "border-radius1"
    }
</script>

<style scoped>
    .rcorners1 {
        border-radius: 25px;
        background: #8AC007;
        padding: 20px;
        width: 200px;
        height: 150px;
        line-height: 150px;
        text-align: center;
    }
    .rcorners2 {
        border-radius: 25px;
        border: 2px solid #8AC007;
        padding: 20px;
        width: 200px;
        height: 150px;
        line-height: 150px;
        text-align: center;
    }
    .rcorners3 {
        border-radius: 25px;
        background: url(/css/bg1.jpg);
        background-position: left top;
        background-repeat: repeat;
        padding: 20px;
        width: 200px;
        height: 150px;
        line-height: 150px;
        text-align: center;
    }
    .rcorners4 {
        border-radius: 15px 50px 30px 5px;
        background: #8AC007;
        padding: 20px;
        width: 200px;
        height: 150px;
    }

    .rcorners5 {
        border-radius: 15px 50px 30px;
        background: #8AC007;
        padding: 20px;
        width: 200px;
        height: 150px;
    }

    .rcorners6 {
        border-radius: 15px 50px;
        background: #8AC007;
        padding: 20px;
        width: 200px;
        height: 150px;
    }
</style>
