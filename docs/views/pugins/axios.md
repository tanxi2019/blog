--- 
title:  axios
date: 2019-10-12
tags: 
 - tool
categories:
 - tool
---
# axios

::: tip
关于[axios](http://www.axios-js.com)在vue里的安装配置及使用
:::

1. 安装

```sh
npm install axios||cnpm install axios
```
2. 配置

::: tip
axios全局配置,找到入口文件main.js,添加如下配置。
:::

```js
import axios from 'axios'

Vue.prototype.$axios = axios;

```
3. axios 使用

```js
this.$axios.get(api).then((response) => {
  console.log(response.data)
})

this.$axios.post(api).then((response) => {
  console.log(response.data)
})
```
