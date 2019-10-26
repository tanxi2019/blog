<template>
    <div class="border-radius">
        <p>指定背景颜色元素的圆角:</p>
        <p class="rcorners1">圆角</p>
        <p>指定边框元素的圆角:</p>
        <p class="rcorners2">圆角</p>
        <p>指定背景图片元素的圆角:</p>
        <p class="rcorners3">圆角</p>
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
    }
    .rcorners2 {
        border-radius: 25px;
        border: 2px solid #8AC007;
        padding: 20px;
        width: 200px;
        height: 150px;
    }
    .rcorners3 {
        border-radius: 25px;
        background: url(/css/bg1.jpg);
        background-position: left top;
        background-repeat: repeat;
        padding: 20px;
        width: 200px;
        height: 150px;
    }
</style>
