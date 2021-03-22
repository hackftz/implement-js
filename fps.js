// 原理是，正常而言 requestAnimationFrame
// 这个方法在一秒内会执行 60 次，也就是不掉帧的情况下。假设动画在时间 A 开始执行，在时间 B 结束，耗时 x ms。
// 而中间 requestAnimationFrame 一共执行了 n 次，则此段动画的帧率大致为：n / (B - A)。

// 核心代码如下，能近似计算每秒页面帧率，以及我们额外记录一个 allFrameCount，用于记录 animationFrame 的执行次数，用于计算每次动画的帧率 ：
var animationFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

var frame = 0;
var allFrameCount = 0;
var lastTime = Date.now();
var lastFameTime = Date.now();

var loop = function () {
  var now = Date.now();
  var fs = now - lastFameTime;
  var fps = Math.round(1000 / fs); // fps可能会有一定误差

  lastFameTime = now;
  // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
  allFrameCount++;
  frame++;

  if (now > 1000 + lastTime) {
    var fps = Math.round((frame * 1000) / (now - lastTime)); // 毫秒取整 保证精确值
    console.log(`${new Date()} 1S内 FPS：`, fps);
    frame = 0;
    lastTime = now;
  }

  animationFrame(loop);
};

loop();
