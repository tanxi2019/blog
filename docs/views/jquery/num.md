--- 
title: jquery
date: 2019-01-15
tags: 
 - jquery

---
# jquery

::: tip jquery集合
利用jquery计算图片高度和宽度，图片要求4:3和3:2的效果
:::
``` js
<script type="text/javascript">
    //高度计算
    $(function() {
    $("#a1 img").height($("#a1 img").width() / (257 / 164));
    })
    </script>
```
