<template>
    <el-carousel :interval="5000" arrow="always" class="content__default">
        <el-carousel-item v-for="item in image">
            <img :src="item.img" alt=""/>
        </el-carousel-item>
    </el-carousel>
</template>
<script>
    export default {
        name:'swiper',
        data() {
            return {
                image:[
                    {id:1,img:'/bg.jpg'},
                    {id:2,img: '/bg.jpg'},
                    {id:3,img:'/bg.jpg'},
                ]
            }
        },
    }
</script>
<style>
    .el-carousel__container {
        position: relative;
        height: 700px;
    }
    .content__default:not(.custom) {
         max-width: 100% !important;
         margin: 0 auto;
         padding: 0 !important;
    }
</style>
