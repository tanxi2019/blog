<template>
    <div class="active">
        <div class="all">
            <div class="more"><a href="#">更多内容>></a></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Active1"
    }
</script>

<style scoped>

.more{ margin: 0 auto; overflow: hidden;width: 200px; text-align: center;cursor: pointer;}
.more a{text-decoration: none; display: block;background: #c07fe7;color: #fff;font-size: 15px;margin: 55px auto 80px;padding: 10% 0;-webkit-transition: all 2s ease;transition: all 2s ease;}
.more a:hover{background-color: black; text-decoration: none !important;}

</style>
