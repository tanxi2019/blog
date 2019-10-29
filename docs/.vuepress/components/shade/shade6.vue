<template>
<div class="shade">
    <div class="grad1">
        渐变背景
    </div>

    <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>
    ​
</div>
</template>

<script>
    export default {
        name: "shade9"
    }
</script>

<style scoped>
    .grad1 {
        line-height: 55px;
        text-align: center;
        margin:auto;
        color:#888888;
        font-size:40px;
        font-weight:bold;
        height: 55px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); /* 标准的语法（必须放在最后） */
    }
</style>
