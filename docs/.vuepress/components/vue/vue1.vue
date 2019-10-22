<template>
    <div>
        <button @click="healdleClick">按钮</button>
    </div>
</template>

<script>
export default {
    name: "vue1",
    data () {
         return {}
    },
    methods: {
        healdleClick:function () {
             console.log("测试")
         }
    }
    }
</script>

<style scoped>

</style>
