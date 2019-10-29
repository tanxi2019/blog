<template>
<div class="shade">
    <h1>重复的线性渐变</h1>
    ​
    <div class="grad1"></div>
    ​
    <p>45deg:</p>
    <div class="grad2"></div>
    ​
    <p>190deg:</p>
    <div class="grad3"></div>
    ​
    <p>90deg:</p>
    <div class="grad4"></div>
    ​
    <p><strong>注意:</strong> Internet Explorer 9 及更早版本的 IE 浏览器不支持线性渐变。</p>


</div>
</template>

<script>
    export default {
        name: "shade8"
    }
</script>

<style scoped>
    .grad1 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
    }

    .grad2 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: repeating-linear-gradient(45deg,red,yellow 7%,green 10%);
    }

    .grad3 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: repeating-linear-gradient(190deg,red,yellow 7%,green 10%);
    }

    .grad4 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: repeating-linear-gradient(90deg,red,yellow 7%,green 10%);
    }
</style>
