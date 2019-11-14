<template>
    <div class="active">
        <div class="pc-nav">
            <ul>
                <li> <a href="#">
                    <div class="pc-nav_one">网站首页</div>
                    <div class="pc-nav_two">HOME</div>
                </a> </li>
                <li> <a href="#">
                    <div class="pc-nav_one">婚礼案例</div>
                    <div class="pc-nav_two">WEDDING</div>
                </a> </li>
                <li> <a href="#">
                    <div class="pc-nav_one">婚礼堂</div>
                    <div class="pc-nav_two">HOTEL</div>
                </a> </li>
            </ul>
        </div>
        </div>
</template>

<script>
    export default {
        name: "Active3"
    }
</script>

<style scoped>
    .active{ width: 300px;margin: 0 auto;}
    .pc-nav{ height: 50px;display: inline-block;padding:10px 0; width: 300px; }
    .pc-nav li { float: left; line-height: 50px; height: 50px; padding: 0 15px; overflow:hidden; }
    .pc-nav li a { float: left;  font-size: 14px; text-decoration: none !important;}
    .cut-son li{height:30px; line-height:30px; text-align:center;}
    .cut span{height:50px; line-height:50px; padding:10px 0; display:block; cursor:pointer; }
    .pc-nav_one{-webkit-transition: all .3s; transition: all .3s;}
    .pc-nav_two{box-sizing: border-box; height:50px; line-height:50px; border-bottom: 5px solid #333; text-align:center;}
    .pc-nav li:hover .pc-nav_one{margin-top:-50px;text-decoration: none;}
</style>
