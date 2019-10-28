<template>
<div class="shade">
    <h3>线性渐变 - 对角</h3>
    <p>从左上角开始（到右下角）的线性渐变。起点是红色，慢慢过渡到黄色：</p>
    <div class="grad3"></div>
    <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>

</div>
</template>

<script>
    export default {
        name: "shade3"
    }
</script>

<style scoped>
    .grad3{
        height: 200px;
        background-color: red; /* 不支持线性的时候显示 */
        background-image: linear-gradient(to bottom right, red , yellow);
    }
</style>
