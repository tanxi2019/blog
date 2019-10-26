<template>
    <div class="bg4">
        <p>没有背景剪裁 (border-box没有定义):</p>
        <div class="example1">
            <h1>拟古决绝词柬友</h1>
            <p>人生若只如初见，何事秋风悲画扇。</p>
            <p>等闲变却故人心，却道故人心易变。</p>
            <p>骊山语罢清宵半，泪雨霖铃终不怨。</p>
            <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
        </div>

        <p>background-clip: padding-box:</p>
        <div class="example2">
            <h1>拟古决绝词柬友</h1>
            <p>人生若只如初见，何事秋风悲画扇。</p>
            <p>等闲变却故人心，却道故人心易变。</p>
            <p>骊山语罢清宵半，泪雨霖铃终不怨。</p>
            <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
        </div>

        <p>background-clip: content-box:</p>
        <div class="example3">
            <h1>拟古决绝词柬友</h1>
            <p>人生若只如初见，何事秋风悲画扇。</p>
            <p>等闲变却故人心，却道故人心易变。</p>
            <p>骊山语罢清宵半，泪雨霖铃终不怨。</p>
            <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bg4"
    }
</script>

<style scoped>
    h1{text-align: center; }
    p{text-align: center; font-size: 20px;}
    .example1 {
        border: 10px solid black;
        padding:35px;
        background: #eee;
        /*background-clip:  border-box;*/
    }

    .example2 {
        border: 10px solid black;
        padding:35px;
        background: #eee;
        background-clip: padding-box;
    }

    .example3 {
        border: 10px solid black;
        padding:35px;
        background: #eee;
        background-clip: content-box;
    }
</style>
