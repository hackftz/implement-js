/*
 * @Author: hackftz
 * @Date: 2021-03-20 22:47:58
 * @LastEditTime: 2021-03-20 22:48:12
 * @LastEditors: hackftz
 * @FilePath: /let-code/sum(1,2)(3)函数柯里化.js
 */

// 不限数量参数
function sum(...rest) {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments);

    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    let sum = _args.reduce(function (a, b) {
      return a + b;
    });
    return sum;
  };
  return _adder;
}
// console.log(sum(1)(2)(3)); // 6
// console.log(sum(1, 2, 3)(4)); // 10
// console.log(sum(1)(2)(3)(4)(5)); // 15

// 编写一个方法sum，使sum(1,2,3) 和 sum(1,2)(3)的输出都为6
function sumWithES6(...rest) {
  var _args = rest;

  var _adder = function (...innerRest) {
    _args.push(...innerRest); // 这里使用的是ES6数组的解构
    return _adder;
  };

  _adder.toString = function () {
    let sum = _args.reduce(function (a, b) {
      return a + b;
    });
    return sum;
  };
  return _adder;
}

// console.log(sumWithES6(1)(2)(3)); // 6

// const curry = (fn, ...args) =>
//   // 函数的参数个数可以直接通过函数数的.length属性来访问
//   args.length >= fn.length // 这个判断很关键！！！
//     ? // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
//       fn(...args)
//     : /**
//        * 传入的参数小于原始函数fn的参数个数时
//        * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
//        */
//       (..._args) => curry(fn, ...args, ..._args);

// function add1(x, y, z) {
//   return x + y + z;
// }
// const add = curry(add1);
// console.log(add(1, 2, 3));
// console.log(add(1)(2)(3));
// console.log(add(1, 2)(3));
// console.log(add(1)(2, 3));
