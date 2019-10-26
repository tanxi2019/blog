<template>
    <div class="bg2">
        <h1 class="title">越人歌</h1>
        <div class="content">
            <p>今夕何夕兮，搴舟中流。</p>
            <p>今日何日兮，得与王子同舟。</p>
            <p>蒙羞被好兮，不訾诟耻。</p>
            <p>心几烦而不绝兮，得知王子。</p>
            <p>山有木兮木有枝，心悦君兮君不知。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bg2"
    }
</script>

<style scoped>
    .title{ text-align: center}
    .content{margin-bottom: 40px;}
    p{ display: inline;font-size: 20px; }
    .bg2 {
        background: url(/css/bg2.png) right bottom no-repeat,url(/css/bg1.jpg) left top repeat;
        padding: 15px;
    }
</style>
