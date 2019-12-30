<template>
  <div>
    <p>TAB切换方法1</p>
    <div class="tab">
      <div class="tab-title">
        <ul>
          <li @click="cur=0" :class="{active:cur===0}">标题一</li>
          <li @click="cur=1" :class="{active:cur===1}">标题二</li>
          <li @click="cur=2" :class="{active:cur===2}">标题三</li>
          <li @click="cur=3" :class="{active:cur===3}">标题四</li>
        </ul>
      </div>
      <div class="tab-content">
        <div v-show="cur===0">内容一</div>
        <div v-show="cur===1">内容二</div>
        <div v-show="cur===2">内容三</div>
        <div v-show="cur===3">内容四</div>
      </div>
    </div>
    <p>TAB切换方法2</p>
    <div class="tab">
      <div  class="tab-title">
        <ul>
          <li v-for="(item,index) in tabTitle"
              :key="index"
              @click="tabCur(index)"
              :class="{active:iscur===index}">{{item.title}}</li>
        </ul>
      </div>
      <div class="tab-content">
        <div v-for="(item,index) in tabMain"
             :key="index"
             v-show="iscur===index">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Tab',
  data () {
    return {
      tabTitle: [
        {title: '标题一'},
        {title: '标题二'},
        {title: '标题三'},
        {title: '标题四'}
      ],
      tabMain: [
        {content: '内容一'},
        {content: '内容二'},
        {content: '内容三'},
        {content: '内容四'}
      ],
      cur: 0, // 默认选中第一个tab
      iscur: 0 // 默认选中第一个tab
    }
  },
  methods: {
    tabCur: function (index) {
      this.iscur = index
    }
  }
}
</script>

<style type="text/css">
  p, ul, ol{padding: 0 !important; margin: 0 !important;}
  .tab{
    width: 328px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid #ccc;
    margin-bottom: 50px;
  }
  p{
    width: 328px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    margin: 15px auto !important;
    font-weight: bold;
  }

  .tab-title{
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .tab-title ul li{
    float: left;
    padding: 10px 14px !important;
    text-align: center;
    background-color:#f4f4f4;
    cursor: pointer;
    list-style-type: none;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
  }
  /* 点击对应的标题添加对应的背景颜色 */
  .tab-title ul .active{
    background-color: #09f;
    color: #fff;
  }
  .tab-content div{
    float: left;
    width: 100%;
    line-height: 30px;
    text-align: center;
  }
</style>
