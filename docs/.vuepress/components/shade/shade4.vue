<template>
<div class="shade4">
    <h3>3 个颜色结点（均匀分布）</h3>
    <div class="grad1"></div>

    <h3>7 个颜色结点（均匀分布）</h3>
    <div class="grad2"></div>

    <h3>3 个颜色结点（不均匀分布）</h3>
    <div class="grad3"></div>

    <p><strong>注意：</strong> 当指定百分比时，颜色是不均匀分布。</p>
    <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>
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
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(red, green, blue); /* 标准的语法（必须放在最后） */
    }
    .grad2 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(red, orange, yellow, green, blue, indigo, violet); /* 标准的语法（必须放在最后） */
    }
    .grad3 {
        height: 200px;
        background-color: red; /* 浏览器不支持的时候显示 */
        background-image: linear-gradient(red 10%, green 85%, blue 90%); /* 标准的语法（必须放在最后） */
    }
</style>
