--- 
title: 创建博客的第一天
date: 2019-10-12
tags: 
 - diary
categories:
 - diary
---
#### 大家好，我是渣渣辉！！！

::: tip
One day for me
:::

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

# React Demo

::: demo [react]
```js
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { number: 0 }
  }
  plus () {
    this.setState({ number: this.state.number + 1 })
  }
  minus () {
    this.setState({ number: this.state.number - 1 })
  }
  render () {
    return (
      <div className="box-react">
        <button onClick={this.plus.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
        {this.state.number}
      </div>
    )
  }
}
App.__style__ = `
  .box-react { color: red; }   
`
` ` `  <= delete spaces here
:::

# Vanilla示例

