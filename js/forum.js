(function () {
  "use strict";

  var target = document.querySelector(".giscus");
  var setup = document.getElementById("forumSetup");
  var githubLink = document.getElementById("forumGithubLink");
  var config = window.GISCUS_CONFIG || {};

  if (!target) return;

  var ready = config.repo && config.repoId && config.category && config.categoryId;
  if (!ready) return;

  if (setup) setup.hidden = true;
  if (githubLink) {
    githubLink.href = "https://github.com/" + config.repo + "/discussions";
    githubLink.hidden = false;
  }

  var script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.async = true;
  script.setAttribute("crossorigin", "anonymous");

  var attributes = {
    "data-repo": config.repo,
    "data-repo-id": config.repoId,
    "data-category": config.category,
    "data-category-id": config.categoryId,
    "data-mapping": "specific",
    "data-term": "停舟问渡",
    "data-strict": "1",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "top",
    "data-theme": "light",
    "data-lang": "zh-CN",
    "data-loading": "lazy"
  };

  Object.keys(attributes).forEach(function (name) {
    script.setAttribute(name, attributes[name]);
  });

  target.appendChild(script);
})();
