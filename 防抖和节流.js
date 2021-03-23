// 防抖 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。
function debounce(fn, time) {
  let timer = null;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(this, arguments);
    }, time);
  };
}

var debounceFn = () => {
  console.log('我是防抖');
};
var d = debounce(debounceFn, 1000);

// 节流 指定时间间隔内只会执行一次任务。
function throttle(fn, time) {
  let go = true;

  return function () {
    if (!go) {
      return;
    }

    go = false;

    setTimeout(() => {
      fn.call(this, arguments);
      go = true;
    }, time);
  };
}

var throttleFn = () => {
  console.log('我是节流');
};
var t = throttle(throttleFn, 1000);
