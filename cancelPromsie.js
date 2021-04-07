function cancelPromise(cb) {
  let _resolve, _reject;

  const promise = new Promise((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
    cb && cb(resolve, reject);
  });

  return {
    promise,
    abort: () => {
      _reject("取消了");
    },
  };
}

var p1 = (resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 2000);
};

const { promise, abort } = cancelPromise(p1);

promise.then((res) => {
  console.log(res);
});

abort();
