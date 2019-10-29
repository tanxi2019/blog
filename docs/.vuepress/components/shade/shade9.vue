<template>
<div class="shade">
    <h3>径向渐变 - 颜色结点均匀分布</h3>
    <div class="grad1"></div>

    <p><strong>注意：</strong> Internet Explorer 9 及之前的版本不支持渐变。</p>

</div>
</template>

<script>
    export default {
        name: "shade9"
    }
</script>

<style scoped>
    .grad1 {
        height: 150px;
        width: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: radial-gradient(red, green, blue); /* 标准的语法（必须放在最后） */
    }
</style>
