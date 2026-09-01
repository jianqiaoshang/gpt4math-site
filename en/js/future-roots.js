(function () {
  "use strict";

  var canvases = document.querySelectorAll(".timeline-future-roots");
  if (!canvases.length) return;

  var mainRoots = [
    { width: 2.4, path: [[.50, .01], [.48, .15, .42, .23, .34, .32], [.27, .40, .25, .54, .18, .63], [.12, .71, .07, .79, .025, .88]] },
    { width: 2.2, path: [[.50, .01], [.47, .18, .43, .28, .40, .39], [.36, .52, .35, .67, .29, .91]] },
    { width: 2.0, path: [[.50, .01], [.50, .20, .46, .34, .47, .49], [.46, .62, .42, .76, .40, .98]] },
    { width: 2.1, path: [[.50, .01], [.50, .20, .49, .35, .52, .49], [.55, .63, .55, .79, .57, .96]] },
    { width: 2.2, path: [[.50, .01], [.54, .16, .59, .25, .62, .37], [.65, .52, .68, .67, .74, .89]] },
    { width: 2.4, path: [[.50, .01], [.55, .13, .61, .22, .67, .31], [.74, .42, .79, .55, .96, .72]] }
  ];

  function strokeRoot(context, root, width, height, color) {
    var path = root.path;
    context.beginPath();
    context.moveTo(path[0][0] * width, path[0][1] * height);
    for (var index = 1; index < path.length; index += 1) {
      var curve = path[index];
      context.bezierCurveTo(
        curve[0] * width, curve[1] * height,
        curve[2] * width, curve[3] * height,
        curve[4] * width, curve[5] * height
      );
    }
    context.lineWidth = root.width;
    context.strokeStyle = color;
    context.stroke();
  }

  function draw(canvas) {
    var bounds = canvas.getBoundingClientRect();
    var width = Math.max(1, Math.round(bounds.width));
    var height = Math.max(1, Math.round(bounds.height));
    var ratio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);

    var context = canvas.getContext("2d");
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.lineCap = "round";
    context.lineJoin = "round";

    var gradient = context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(74, 74, 70, .96)");
    gradient.addColorStop(.56, "rgba(92, 92, 87, .76)");
    gradient.addColorStop(.86, "rgba(116, 116, 109, .42)");
    gradient.addColorStop(1, "rgba(116, 116, 109, 0)");

    mainRoots.forEach(function (root) { strokeRoot(context, root, width, height, gradient); });
  }

  canvases.forEach(function (canvas) {
    var frame = 0;
    function scheduleDraw() {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(function () {
        frame = 0;
        draw(canvas);
      });
    }

    scheduleDraw();
    if ("ResizeObserver" in window) {
      new ResizeObserver(scheduleDraw).observe(canvas);
    } else {
      window.addEventListener("resize", scheduleDraw);
    }
  });
})();
