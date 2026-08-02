(function () {
  "use strict";

  var data = window.AI_MATH_DATA;
  var body = document.body;
  var root = body.dataset.root || "./";

  function path(value) {
    return root + value;
  }

  function categoryBySlug(slug) {
    return data.categories.find(function (category) { return category.slug === slug; });
  }

  function renderHeader() {
    var target = document.getElementById("siteHeader");
    if (!target) return;
    target.innerHTML =
      '<nav aria-label="主要导航">' +
        '<a href="' + path('index.html') + '">时间轴</a>' +
        data.categories.map(function (category) {
          return '<a href="' + path('progress/' + category.slug + '.html') + '">' + category.name + '</a>';
        }).join('') +
        '<a href="' + path('future.html') + '">未来？</a>' +
      '</nav>';
  }

  function renderFooter() {
    var target = document.getElementById("siteFooter");
    if (!target) return;
    target.innerHTML =
      '<a href="' + path('index.html') + '">AI 数学史</a>' +
      '<a href="#top">返回顶部 ↑</a>';
  }

  function renderHome() {
    var categoryTarget = document.getElementById("categoryList");
    var overviewTarget = document.getElementById("timelineOverview");
    var timelineTarget = document.getElementById("timelineList");
    if (!timelineTarget) return;

    if (categoryTarget) {
      categoryTarget.innerHTML = data.categories.map(function (category, index) {
        return '<a href="progress/' + category.slug + '.html" style="--category:' + category.color + '">' +
          '<i></i><small>0' + (index + 1) + '</small><strong>' + category.name + '</strong><span>↗</span>' +
        '</a>';
      }).join("");
    }

    if (overviewTarget) {
      var ranges = [
        { start: 1931, end: 2019 },
        { start: 2020, end: 2026 }
      ];
      overviewTarget.innerHTML = ranges.map(function (range) {
        var rangeEvents = data.events.filter(function (event) {
          var yearMatch = event.year.match(/\d{4}/);
          var year = yearMatch ? Number(yearMatch[0]) : 0;
          return year >= range.start && year <= range.end;
        });
        return '<div class="timeline-overview-item">' +
          '<div class="timeline-overview-track">' +
            rangeEvents.map(function (event, eventIndex) {
              var category = categoryBySlug(event.category);
              var dateMatch = event.year.match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?/);
              var year = Number(dateMatch[1]);
              var month = dateMatch[2] ? Number(dateMatch[2]) : 7;
              var day = dateMatch[3] ? Number(dateMatch[3]) : 15;
              var point = year + ((month - 1) + ((day - 1) / 31)) / 12;
              var position = 2 + ((point - range.start) / (range.end - range.start + 1)) * 96;
              var sameDateEvents = rangeEvents.filter(function (item) { return item.year === event.year; });
              var sameDateIndex = rangeEvents.slice(0, eventIndex).filter(function (item) { return item.year === event.year; }).length;
              position += (sameDateIndex - ((sameDateEvents.length - 1) / 2)) * 2.2;
              position = Math.max(2, Math.min(98, position));
              var coreClass = event.core ? ' is-core' : '';
              return '<a class="timeline-overview-dot' + coreClass + '" href="#' + event.id + '" ' +
                'style="--position:' + position.toFixed(3) + '%;--category:' + category.color + '" ' +
                'aria-label="定位到' + event.year + '：' + event.title + '" title="' + event.year + '"></a>';
            }).join('') +
          '</div>' +
          '<div class="timeline-overview-labels"><span>' + range.start + '</span><span>' + range.end + '</span></div>' +
        '</div>';
      }).join('');
    }

    timelineTarget.innerHTML = '<div class="timeline-spine" aria-hidden="true"></div>' + data.events.map(function (event, index) {
      var category = categoryBySlug(event.category);
      var detail = event.detail ? '<aside>' + event.detail + '</aside>' : '';
      var summary = event.summary ? '<p>' + event.summary + '</p>' : '';
      var coreClass = event.core ? ' is-core' : '';
      var nodeLabel = event.core ? '核心节点：' : '时间节点：';
      return '<article class="timeline-row ' + (index % 2 === 0 ? 'timeline-left' : 'timeline-right') + '" style="--category:' + category.color + '" id="' + event.id + '">' +
        '<span class="timeline-year">' + event.year + '</span>' +
        '<button class="timeline-node' + coreClass + '" type="button" aria-label="' + nodeLabel + event.year + '，' + event.title + '"></button>' +
        '<a class="timeline-card" href="progress/' + category.slug + '.html#' + event.id + '">' +
          '<small><i></i>' + category.name + '</small>' +
          '<h3>' + event.title + '</h3>' +
          summary +
        '</a>' + detail +
      '</article>';
    }).join("") +
      '<a class="timeline-future-end" href="future.html" aria-label="进入未来页面">' +
        '<span class="timeline-future-branches" aria-hidden="true"><canvas class="timeline-future-roots"></canvas></span>' +
        '<span class="timeline-future-label">未来会怎样？</span>' +
      '</a>';
  }

  function renderProgress() {
    var slug = body.dataset.slug;
    var category = categoryBySlug(slug);
    var target = document.getElementById("progressPage");
    if (!category || !target) return;

    var events = data.events.filter(function (event) { return event.category === slug; });
    var intro = category.intro ? '<p class="topic-intro">' + category.intro + '</p>' : '';
    var milestones = events.length ?
      '<section class="milestones shell">' +
        events.map(function (event) {
          var summary = event.summary ? '<p>' + event.summary + '</p>' : '';
          var source = event.source ? '<a class="milestone-source" href="' + event.source + '" target="_blank" rel="noopener noreferrer">参考链接 ↗</a>' : '';
          return '<article id="' + event.id + '">' +
            '<time>' + event.year + '</time>' +
            '<div><h2>' + event.title + '</h2>' + summary +
              (event.detail ? '<p class="milestone-detail">' + event.detail + '</p>' : '') +
              source +
            '</div>' +
          '</article>';
        }).join('') +
      '</section>' : '';
    document.title = category.name + '｜AI 数学史';

    target.style.setProperty('--category', category.color);
    target.innerHTML =
      '<section class="topic-hero shell">' +
        '<a class="back-link" href="../index.html">← 时间轴</a>' +
        '<h1>' + category.name + '</h1>' +
        '<div class="topic-rule"></div>' +
        intro +
      '</section>' +
      milestones;
  }

  function renderFuture() {
    var themes = document.getElementById("futureThemes");
    var categories = document.getElementById("futureCategories");
    if (!themes || !categories) return;
    themes.innerHTML = data.futureThemes.map(function (theme) {
      return '<article><span>' + theme.index + '</span><h2>' + theme.title + '</h2><p>' + theme.text + '</p></article>';
    }).join('');
    categories.innerHTML = data.categories.map(function (category) {
      return '<a href="progress/' + category.slug + '.html" style="--category:' + category.color + '"><i></i>' + category.name + '<span>↗</span></a>';
    }).join('');
  }

  renderHeader();
  renderFooter();

  if (body.dataset.page === "home") renderHome();
  if (body.dataset.page === "progress") renderProgress();
  if (body.dataset.page === "future") renderFuture();

  document.addEventListener("click", function (event) {
    var node = event.target.closest(".timeline-node");
    if (!node) return;
    var row = node.closest(".timeline-row");
    if (row) row.classList.toggle("is-open");
  });
})();
