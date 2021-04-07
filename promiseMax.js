const TotalTaskCount = 1000; // 一共有1000个链接
const MaxConcurrency = 10; // 同时下载的链接数最大不超过10
const url = [...]; // 1000个下载链接组成的数组
const download = function (urlStr) {
  // 返回Promise, 当下载完成的时候resolve
}

// Answer：

let todoList = [];
let nextIndex = 0;
for (let j = 0; j < MaxConcurrency; j++) {
  let task = download(url[nextIndex]).then(() => {return j}); // 注意这里resolve的值是任务在todoList的脚标，方便我们在Promise.race之后找到完成的任务脚标
  todoList.push(task);
  nextIndex++;
}

const run = async function(todo) {
  let index = await Promise.race(todo); // 这里index等于Promise.race第一个完成的任务的脚标
  if (nextIndex < TotalTaskCount) {
    todo[index] = download(url[nextIndex]).then(() => {return index;}); // 一旦有一个任务完成，马上把他替换成一个新的任务，继续下载
    nextIndex++;
  }
  await run(todo);
}

run(todoList);