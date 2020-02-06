--- 
title: vue案例
date: 2020/1/30
tags: 
 - diary
categories:
 - diary
---

# Vue Demo
::: demo
```html
<template>
  <div class="box-vue">Vue {{ message }}</div>
</template>
<script>
export default {
 // data: () => ({ message: 'Hello World' })
    data(){
        return {
           message: 'Hello World' 
        }
    }
}
</script>
<style>
.box-vue { color: red; }
</style>
:::
