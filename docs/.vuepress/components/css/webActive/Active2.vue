<template>
    <div class="active">
        <a href="#">
            <div class="box">
                <img src="https://s2.ax1x.com/2019/11/08/MZVdXt.jpg" alt="MZVdXt.jpg"  />
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Active2"
    }
</script>

<style scoped>
.active .box{height: 200px;width: 300px; overflow: hidden; margin: 0 auto;}
.active img{width: 100%;-webkit-transition: all 5s ease;transition: all 5s ease;-webkit-transform: scaleX(1) scaleY(1);transform: scaleX(1) scaleY(1);}
.active img:hover{-webkit-transform: scaleX(1.1) scaleY(1.1);transform: scaleX(1.1) scaleY(1.1);-webkit-filter: brightness(.5);filter: brightness(.5);-webkit-transition: all 2s ease 0s;transition: all 2s ease 0s;}
</style>
