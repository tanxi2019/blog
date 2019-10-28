<template>
<div class="shade">
    <h3>线性渐变 - 从左到右</h3>
    <p>从左边开始的线性渐变。起点是红色，慢慢过渡到蓝色：</p>
    <div class="grad2"></div>
    <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>

</div>
</template>

<script>
    export default {
        name: "shade2"
    }
</script>

<style scoped>
    .grad2 {
        height: 200px;
        background-color: red; /* 不支持线性的时候显示 */
        background-image: linear-gradient(to right, red , yellow);
    }
</style>
