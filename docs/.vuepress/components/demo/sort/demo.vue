<template>
  <div class="box">
      <el-button @click="headleClickSort">冒泡排序</el-button>
      <span >{{demo}}</span>
      <div></div>
      <el-button @click="headleClickSortOne">快速排序</el-button>
      <span >{{demo1}}</span>
  </div>
</template>

<script>
export default{
  name: 'demo',
  data () {
    return {
      demo:[7 ,2, 4, 1, 3, 5, 8, 9, 6],
       demo1:[7 ,2, 4, 1, 3, 5, 8, 9, 6]
    }
  },
  methods: {
    headleClickSort: function () {
      console.log('测试')
      const array = [ 7 ,2, 4, 1, 3, 5, 8, 9, 6];
      this.demo=array
       for(let i =0; i<array.length-1; i++){
                    for(let j=0; j<array.length-1-i; j++){
                        if (array[j] > array[j+1]){
                            let temp = 0;
                            temp = array[j];
                            array[j] = array[j+1];
                            array[j+1] = temp;
                        }
                        
                    }
                }
                 console.log(array);
    },
    headleClickSortOne:function(){
      console.log('测试')
      const array = [ 7 ,2, 4, 1, 3, 5, 8, 9, 6];
      this.demo1=array
       this.demo1.sort(function(a,b){
          return a - b
       })
        console.log(array)
    }
  }
}
</script>

<style type="text/css">
 
  .tab{
    width: 328px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid #ccc;
    margin-bottom: 50px;
  }
</style>


