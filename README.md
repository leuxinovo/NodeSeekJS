```
<!-- NodeSeek赞助YxVM服务器代码，自定义 Support ID -->
<div id="card-container" style="--card-width: 100%;" data-support-id="74"></div>
<script src="https://cdn.jsdelivr.net/gh/leuxinovo/NodeSeekJS/nodeseek.js"></script>
```
屏蔽收录
```
<!-- NodeSeek赞助模块（动态加载，减少搜索引擎收录风险） -->
<div id="card-placeholder"></div>
<script>
document.addEventListener("DOMContentLoaded", function(){
    // 创建赞助卡片
    const card = document.createElement("div");
    card.id = "card-container";
    card.style.setProperty("--card-width", "100%");
    card.dataset.supportId = "74"; // 自定义 Support ID
    document.getElementById("card-placeholder").appendChild(card);

    // 动态加载 NodeSeek JS
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/gh/leuxinovo/NodeSeekJS/nodeseek.js";
    s.defer = true;
    document.body.appendChild(s);
});
</script>
```
