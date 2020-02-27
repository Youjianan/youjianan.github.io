---
title: about
date: 2020-02-26 22:16:36
keywords: 关于
description: 
comments: false
photos: https://cdn.jsdelivr.net/gh/Youjianan/cdn@1.31/img/banner/about.jpg
---
{% raw %}
<!-- 因为vue和botui更新导致bug,现将对话移至js下的botui中配置 -->
<div class="entry-content">
  <div class="moe-mashiro" style="text-align:center; font-size: 50px; margin-bottom: 20px;">[さくら荘の楠沐]</div>
  <div id="hello-mashiro" class="popcontainer" style="min-height: 300px; padding: 2px 6px 4px; background-color: rgba(242, 242, 242, 0.5); border-radius: 10px;">
    <center><h4><span style="margin-right: 5px; font-size: 16px; color: #FF6D6D;">>>></span>与 楠沐 对话中...</h4></center>
    <bot-ui></botui>
  </div>
</div>
<script src="/js/botui.js"></script>
<script>
bot_ui_ini()
</script>
{% endraw %}