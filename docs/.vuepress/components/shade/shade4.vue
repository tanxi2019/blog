<template>
<div class="shade">

    <h3>线性渐变 - 使用不同的角度</h3>
    <div class="grad1" style="text-align:center;">0deg</div><br>
    <div class="grad2" style="text-align:center;">90deg</div><br>
    <div class="grad3" style="text-align:center;">180deg</div><br>
    <div class="grad4" style="text-align:center;">-90deg</div>
    <p><strong>注意：</strong> Internet Explorer 9 及之前的版本不支持渐变。</p>
    ​
</div>
</template>

<script>
    export default {
        name: "shade4"
    }
</script>

<style scoped>
    .grad1 {
        height: 100px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(0deg, red, yellow);
    }
    .grad2 {
        height: 100px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(90deg, red, yellow);
    }
    .grad3 {
        height: 100px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(180deg, red, yellow);
    }
    .grad4 {
        height: 100px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(-90deg, red, yellow);
    }
</style>
