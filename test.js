// 节流函数 多次触发
function throttle(fn, time) {
  let timer = null;

  return function () {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      fn();
      timer = null;
    }, time);
  };
}

function say() {
  console.log('hello');
}

var func = throttle(say, 1000);

// 防抖函数 多次触发 只执行最后一次
function debounce(fn, time) {
  let timer = null;

  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn();
    }, time);
  };
}

var func1 = debounce(say, 1000);
