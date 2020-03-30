--- 
title: vuex
date: 2020/2/6
tags: 
 - Vue
categories:
 - Vue
---

# vuex 模块化 <Badge text="方式一" type="warning"/>
 
 ```
  vuex project
 │____build
 │____config
 │   
 │____src
 │   │____api // 接口文件
 │   │____assets // img，css文件
 │   │____components // 组件
 │   │____router // 路由
 │   │____store // vuex  
 │   │   │____index.js 
 │   │   │____actions.js 
 │   │   │____getters.js
 │   │   │____mutations.js
 │   │   │____state.js
 │   │   │____types.js
 │   │   │____modules
 │   │        │____home.js
 │   │        │____list.js
 │   │         
 │   │____App.vue // 根组件   
 │   │____main.js // 入口
 │  
 │   
 └───
 ```
 ## index.js
 
 ```js
import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import state from '@/store/state'
import home from '@/store/modules/home'
import list from '@/store/modules/list'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { // 单独模块引入，每个模块都有单独的state，getters，actions， mutations
    home,
    list
  },
  state, // 共同维护的一个状态，state里面可以是很多个全局状态
  getters, // 获取数据并渲染
  actions, // 数据的异步操作，操作复杂的逻辑。
  mutations// 处理数据的唯一途径，state的改变或赋值只能在这里
})

export default store
```
 ## actions.js
 
 ```js
// 数据的异步操作，操作复杂的逻辑。
import * as TYPES from '@/store/types'
import {getUser} from '@/api/api'
const actions = {
  modifyAName: (context, name) => {
    context.commit(TYPES.MODIFYANAME, name)
  },
  modifyBName: (context, name) => {
    context.commit(TYPES.MODIFYBNAME, name)
  },
  modifyName: (context, name) => {
    context.commit(TYPES.MODIFYNAME, name)
  },
  modifyCName: (context, name) => {
    context.commit(TYPES.MODIFYCNAME, name)
  },
  // myIncrement: (context) => {
  //   context.commit(TYPES.INCREMENT)
  //   console.log(context, getUser())
  // },
  myDecrease: (context) => {
    context.commit(TYPES.DECREASE)
  },
  // 在actions里使用 async ，await
  async myIncrement (context) {
    context.commit(TYPES.INCREMENT)
    const user = await getUser().then(res => res.data)
    return user
  },
  user: (context,obj) => {
    context.commit(TYPES.USER,obj)
    console.log(obj)
  },
}
export default actions
```
 ## getters.js
 ```js
// 获取数据并渲染
const getters = {
  myCount: state => {
    return `this is myCount ${state.count}`
  },
  resturantName: state => {
    return state.resturantName
  }
}
export default getters
```

## mutations.js
 ```js
// 处理数据的唯一途径，state的改变或赋值只能在这里
import * as TYPES from '@/store/types'
const mutations = {
  [TYPES.INCREMENT]: (state) => {
    state.count++
  },
  [TYPES.DECREASE]: (state) => {
    // eslint-disable-next-line no-unused-expressions
    state.count > 0 ? state.count-- : 0
  },
  [TYPES.MODIFYANAME]: (state, name) => {
    state.resturantName = name
  },
  [TYPES.MODIFYBNAME]: (state, name) => {
    state.resturantName = name
  },
  [TYPES.MODIFYNAME]: (state, name) => {
    state.resturantName = name
  },
  [TYPES.MODIFYCNAME]: (state, name) => {
    state.resturantName = name
  },
  [TYPES.USER]: (state, obj) => {
    state.user = obj.user
  }
}
export default mutations
```

## state.js
 ```js
// 共同维护的一个状态，state里面可以是很多个全局状态。
const state = {
  count: 0,
  resturantName: '飞歌餐馆', // 默认值
  user:[
    {id:0,name:'tanxi'},
    {id:1,name:'jack'},
    {id:2,name:'kangkang'},
  ]
}
export default state
```

## types.js
 ```js
// 常量，方便开发人员查询
export const INCREMENT = 'INCREMENT'
export const DECREASE = 'DECREASE'
export const MODIFYANAME = 'MODIFYNAME'
export const MODIFYBNAME = 'MODIFYBNAME'
export const MODIFYCNAME = 'MODIFYCNAME'
export const MODIFYNAME = 'MODIFYNAME'
export const USER = 'USER'
```
# vuex modules <Badge text="方式二" type="warning"/>

## home.js

```js
const state = {
  counts: 1
}

const mutations = {
  adds: function (state) {
    state.counts++
  },
  reduce: function (state) {
    state.counts--
  }
}

const actions = {
  adds: function ({commit}) {
    return commit('adds')
  },
  reduce: function ({commit}) {
    return commit('reduce')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
```

## list.js

```js
const state = {
  money: 100
}

const mutations = {
  adds: function (state, name) {
    console.log(name)
    state.money += name
    // tate.money++
  },
  reduce: function (state, name) {
    state.money -= name
    // tate.money--
  }
}

const actions = {
  adds: function ({commit}, name) {
    return commit('adds', name)
  },
  reduce: function ({commit}, name) {
    return commit('reduce', name)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
```
## App.vue
```vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
## HelloWorld.vue
```vue
<template>
  <div class="hello">
   <h2>{{$store.state.count}}</h2>
    <Hello></Hello>
    <h2>{{count}}</h2>
    <h4>{{myCount}}</h4>
    <div class="componentsB">
      <P class="title">组件B</P>
      <P class="titleName">餐馆名称：{{resturantName}}</P>
      <div>
        <!-- 点击修改 为 B 餐馆 -->
        <button class="btn" @click="modifyName('B餐馆')">修改为B餐馆</button>
      </div>
      <div class="marTop">
        <button class="btn" @click="trunToA">跳转到组件A页面</button>
      </div>
      <div>{{user}}</div>
       <div>
        <ul>
          <li v-for="item in user" :key="item.id">
              {{item.id}}----{{item.name}}
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
import Hello from '@/components/Hello'
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  components: {Hello},
  data () {
    return {
     userList:[]
    }
  },
  methods: {
    ...mapActions(['modifyName']), // 相当于this.$store.dispatch('modifyName'),提交这个方法
    trunToA () {
      this.$router.push({path: '/componentsA'}) // 路由跳转到A
    }
  },
  computed: {
    ...mapState(['count','user']), // count: function () {return this.$store.state.count},
    ...mapGetters(['resturantName', 'myCount']) // 动态计算属性，相当于this.$store.getters.resturantName
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn{
  width: 160px;
  height: 40px;
  background-color: blue;
  border: none;
  outline: none;
  color: #ffffff;
  border-radius: 4px;
}
.marTop{
  margin-top: 20px;
}
</style>
```

## componentsA.vue

```vue
<template>
  <div class="componentsA">
    <P class="title">组件A</P>
    <P class="titleName">餐馆名称：{{resturantName}}</P>
    <div>
      <!-- 点击修改 为 A 餐馆 -->
      <button class="btn" @click="modifyAName('A餐馆')">修改为A餐馆</button>
    </div>
    <div class="marTop">
      <button class="btn" @click="trunToB">跳转到B页面</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'A',
  data () {
    return {
    }
  },
  methods: {
    // 语法糖
    ...mapActions(['modifyAName']), // 相当于this.$store.dispatch('modifyName'),提交这个方法
    trunToB (e) {
      this.$router.push({path: '/componentsB'}) // 路由跳转到B
    }
  },
  computed: { // 计算属性
    // 语法糖
    ...mapGetters(['resturantName']) // 动态计算属性，相当于this.$store.getters.resturantName
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title,.titleName{
    color: blue;
    font-size: 20px;
  }
  .btn{
     width: 160px;
     height: 40px;
     background-color: blue;
     border: none;
     outline: none;
     color: #ffffff;
     border-radius: 4px;
   }
  .marTop{
    margin-top: 20px;
  }
</style>
```

## componentsB.vue
```vue
<template>
  <div class="componentsB">
    <P class="title">组件B</P>
    <P class="titleName">餐馆名称：{{resturantName}}</P>
    <div>
      <!-- 点击修改 为 B 餐馆 -->
      <button class="btn" @click="modifyBName('B餐馆')">修改为B餐馆</button>
    </div>
    <div class="marTop">
      <button class="btn" @click="handleClick">跳转到组件C页面</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'B',
  data () {
    return {
    }
  },
  methods: {
    // 语法糖
    ...mapActions(['modifyBName']), // 相当于this.$store.dispatch('modifyName'),提交这个方法

    handleClick: function (e) {
      this.$router.push({path: '/componentsC'}) // 路由跳转到A
    }
  },
  computed: {
    ...mapGetters(['resturantName']) // 动态计算属性，相当于this.$store.getters.resturantName
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title,.titleName{
    color: red;
    font-size: 20px;
  }
  .btn{
    width: 160px;
    height: 40px;
    background-color: red;
    border: none;
    outline: none;
    color: #ffffff;
    border-radius: 4px;
  }
  .marTop{
    margin-top: 20px;
  }
</style>
```

## componentsC.vue
```vue
<template>
  <div class="componentsB">
    <P class="title">组件C</P>
    <P class="titleName">餐馆名称：{{resturantName}}</P>
    <div>
      <!-- 点击修改 为 B 餐馆 -->
      <button class="btn" @click="modifyCName('C餐馆')">修改为C餐馆</button>
    </div>
    <div class="marTop">
      <button class="btn" @click="handleClick">跳转到hello word页面</button>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'B',
    data () {
      return {
      }
    },
    methods:{
      // 语法糖
      ...mapActions(['modifyCName']), // 相当于this.$store.dispatch('modifyName'),提交这个方法

      handleClick:function(e) {
        this.$router.push({path: '/'}) // 路由跳转到A
      }
    },
    computed: {
      ...mapGetters(['resturantName']) // 动态计算属性，相当于this.$store.getters.resturantName
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title,.titleName{
    color: red;
    font-size: 20px;
  }
  .btn{
    width: 160px;
    height: 40px;
    background-color: red;
    border: none;
    outline: none;
    color: #ffffff;
    border-radius: 4px;
  }
  .marTop{
    margin-top: 20px;
  }
</style>
```

