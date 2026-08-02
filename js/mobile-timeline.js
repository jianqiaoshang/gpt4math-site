(function () {
  "use strict";

  document.querySelectorAll(".timeline-row").forEach(function (row) {
    var source = row.querySelector(".timeline-year");
    var heading = row.querySelector(".timeline-card h3");
    if (!source || !heading || row.querySelector(".timeline-year-mobile")) return;

    var mobileDate = document.createElement("time");
    mobileDate.className = "timeline-year-mobile";
    mobileDate.textContent = source.textContent.trim();
    mobileDate.setAttribute("aria-hidden", "true");
    heading.insertAdjacentElement("afterend", mobileDate);
  });
})();
