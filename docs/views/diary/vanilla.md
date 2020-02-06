--- 
title: vanilla示例
date: 2020/1/30
tags: 
 - diary
categories:
 - diary
---

# Vanilla Demo

::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World!'
  console.log(box)
</script>
<style>
#vanilla-box {
  color: red;
}
</style>
:::