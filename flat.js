// 数组降维
function flat(arr) {
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      let array = flat(cur);
      prev = [...prev, ...array];
    } else {
      prev = [...prev, cur];
    }

    return prev;
  }, []);
}

var arr = [1, 2, [3, 4], [5, [6, 7, 8]]];

var res = flat(arr);
console.log("%c⧭", "color: #917399", res);
