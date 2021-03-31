// 1. 确定参数的函数柯里化实现

function sum(a, b, c, d) {
  return a + b + c + d;
}
function curry(fn) {
  // 递归
  function sum(...args) {
    if (args.length < fn.length) {
      // 判断接受的参数是否小于函数的参数长度
      return function () {
        // 参数不够长度，再次接受传递参数
        return sum(...args, ...arguments);
      };
    }
    return fn(...args); // 不要求改变this,
  }

  return sum;
}

// let curried = curry(sum);

// console.log(curried(1)(2)); //10

// console.log('%c⧭', 'color: #997326', curried);

// 2. 不确定参数实现sum(1)(2)(3)(4)(5)(6)...无限累加 #################

function curry(fn) {
  let params = [];

  function fun(...args) {
    if (args.length) {
      params = [...params, ...args];
      return fun;
    }

    return fn(params);
  }

  return fun;
}

function add(...args) {
  return Array.from(args).reduce((a, b) => a + b);
}

// var add = curry(add);

// var res = add(1)(2)();
// console.log('%c%s', 'color: #bfffc8', res);

// 未知参数个数，方法二 #################################

function curry(a) {
  function sum(b) {
    a = b ? a + b : a;
    return sum;
  }
  sum.toString = function () {
    return a;
  };
  return sum;
}
// console.log(curry(1)(1).toString());

// 方法二改进版，每次可传递多个参数
function curry(...args) {
  let params = args;

  function sum() {
    params = [...params, ...arguments];
    return sum;
  }

  sum.toString = function () {
    return params.reduce((a, b) => a + b);
  };

  return sum;
}

console.log(curry(1)(2)(3)(10)(10, 20).toString());
