<template>
    <div class="content">
      <div class="dem-1">
            <div class="div1"><img src="https://s2.ax1x.com/2019/11/08/MZVdXt.jpg" alt="MZVdXt.jpg" /></div>
      </div>
        <div class="dem-2">
            <div class="div2"><img src="https://s2.ax1x.com/2019/11/08/MZVdXt.jpg" alt="MZVdXt.jpg" /></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Active4"
    }
</script>

<style scoped>
    .content {margin: 0 auto; width:300px;display:block;height: auto;}
    .dem-1{ width: 300px; display: inline-block; height: auto; margin: 30px 0;}
    .dem-1 .div1{width: 300px; -webkit-transition: all 0.5s;-moz-transition: all 0.5s;-o-transition: all 0.5s;transition: all 0.5s;}
    .dem-1 .div1 img {width: 300px;height: 200px;border-radius: 5px;}
    .dem-1 .div1:hover {transform: rotate(360deg);-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-o-transform: rotate(360deg);-ms-transform: rotate(360deg);}

    .dem-2{ width: 300px; display: inline-block; height: auto;}
    .dem-2 .div2{transition: All 0.4s ease-in-out;-webkit-transition: All 0.4s ease-in-out;-moz-transition: All 0.4s ease-in-out;-o-transition: All 0.4s ease-in-out;}
    .dem-2 .div2 img {width: 300px;height: 200px;border-radius: 5px;}
    .dem-2 .div2:hover {transform: translate(0, -10px);-webkit-transform: translate(0, -10px);-moz-transform: translate(0, -10px);-o-transform: translate(0, -10px);-ms-transform: translate(0, -10px);}
</style>
