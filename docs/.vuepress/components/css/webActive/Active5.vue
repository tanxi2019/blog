<template>
    <div class="line">
        <ul>
            <li><a href="#">网站首页</a></li>
            <li><a href="#">技术支持</a></li>
            <li><a href="#">关于我们</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Active5"
    }
</script>

<style scoped>
    .line{ width: 300px; height: 60px;margin: 0 auto;}
    .line ul li { float: left; padding: 0 15px;list-style: none;position: relative;line-height: 60px ; }
    .line ul li a{ text-decoration: none !important;display: block;text-align: center; font-size: 14px;}
    .line ul li a:after{content: ""; position: absolute;  width: 100%; height: 2px; top: 50px; left: 0; background-color: #3eaf7c; visibility: hidden; -webkit-transform: scaleX(0); transform: scaleX(0); -webkit-transition: .3s ease-in-out; transition: .3s ease-in-out;}
    .line ul li a:hover:after{visibility: visible; -webkit-transform: scaleX(1);   transform: scaleX(1);}
</style>
