/*
 * @Author: hackftz
 * @Date: 2021-03-20 22:47:58
 * @LastEditTime: 2021-03-20 22:48:12
 * @LastEditors: hackftz
 * @FilePath: /let-code/sum(1,2)(3)函数柯里化.js
 */

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

console.log(sumWithES6(1)(2)(3)); // 6