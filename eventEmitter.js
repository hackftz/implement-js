class EventEmitter {
  constructor() {
    this.events = {};
  }

  // 监听事件
  on(name, fn) {
    if (!this.events[name]) {
      this.events[name] = [];
    }

    this.events[name].push(fn);
  }

  // 触发事件
  emit(name, ...args) {
    const fns = this.events[name];

    if (!fns) {
      throw new Error(`there is no init in the ${name} event`);
    }

    for (const fn of fns) {
      fn(...args);
    }
  }

  // 销毁事件
  off(name) {
    delete this.events[name];
    console.log('销毁成功');
  }
}

var e = new EventEmitter();

e.on('say hello', function () {
  console.log('hello, hello');
});

e.emit('say hello');

console.log('%c⧭', 'color: #00258c', e);
