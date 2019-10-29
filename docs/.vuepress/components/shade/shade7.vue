<template>
<div class="shade">
    <h3>线性渐变 - 透明度</h3>
    <p>为了添加透明度，我们使用 rgba() 函数来定义颜色结点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。</p>

    <div class="grad1"></div>

    <p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>
    ​
</div>
</template>

<script>
    export default {
        name: "shade7"
    }
</script>

<style scoped>
    .grad1 {
        height: 200px;
        background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
    }
</style>
