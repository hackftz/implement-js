/*
 * @Author: hackftz
 * @Date: 2021-03-20 21:43:26
 * @LastEditTime: 2021-03-20 21:44:34
 * @LastEditors: hackftz
 * @FilePath: /html-test/queue.js
 */

class Queue {
  constructor() {
    this.arr = [];
    this.time = 0;
  }
  task(ms, f) {
    this.arr.push([ms, f]);
    return this;
  }
  start() {
    while (this.arr.length) {
      const [ms, f] = this.arr.shift();
      this.time += ms;
      setTimeout(f, this.time);
    }
    this.time = 0;
  }
}

new Queue()
  .task(1000, () => {
    console.log(1);
  })
  .task(2000, () => {
    console.log(2);
  })
  .task(1000, () => {
    console.log(3);
  })
  .start();
