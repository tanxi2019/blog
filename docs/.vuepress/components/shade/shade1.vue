<template>
<div class="shade">
    <h3>线性渐变 - 从上到下</h3>
    <p>从顶部开始的线性渐变。起点是红色，慢慢过渡到蓝色：</p>
    <div class="grad1"></div>
    <p><strong>注意：</strong> Internet Explorer 9 及之前的版本不支持渐变。</p>
    ​
</div>
</template>

<script>
    export default {
        name: "shade1"
    }
</script>

<style scoped>
    .grad1 {
        height: 200px;
        background-color: red; /* 浏览器不支持时显示 */
        background-image: linear-gradient(#e66465, #9198e5);
    }
</style>
