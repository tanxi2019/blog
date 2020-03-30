--- 
title: jquery案例
date: 2020-01-30
tags: 
 - diary
categories:
 - diary
---

# Jquery Demo
::: demo [vanilla]
```html
<html>
    <p>如果你点我，我就会消失。</p>
    <p>继续点我!</p>
    <p>接着点我!</p>
</html>
<script>
  $(document).ready(function(){
    $("p").click(function(){
     $(this).hide();
     });
    });
</script>
<style>
#vanilla-box {
  color: red;
}
</style>
:::