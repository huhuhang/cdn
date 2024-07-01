var disqus = {
  load: function disqus() {
    var disqus_shortname = "huhuhang"; // 修改为自己的 Disqus 名称
    if (typeof DISQUS !== "object") {
      (function() {
        var s = document.createElement("script");
        s.async = true;
        s.type = "text/javascript";
        s.src = "//" + disqus_shortname + ".disqus.com/embed.js";
        (
          document.getElementsByTagName("HEAD")[0] ||
          document.getElementsByTagName("BODY")[0]
        ).appendChild(s);
      })();
      $("#load-disqus").remove(); // 加载后自动删除
    }
  }
};

document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "\\[", right: "\\]", display: true},
            {left: "$", right: "$", display: false},
            {left: "\\(", right: "\\)", display: false}
        ]
    });
});
