/*
 * @Author: hackftz
 * @Date: 2021-03-22 12:07:37
 * @LastEditTime: 2021-03-22 18:35:15
 * @LastEditors: hackftz
 * @FilePath: /html-test/extend.js
 */

// babel前

// class Parent {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   speakSomething() {
//     console.log('I can speek chinese');
//   }
// }

// babel后

'use strict';

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var Parent = (function () {
  function Parent(name, age) {
    _classCallCheck(this, Parent);

    this.name = name;
    this.age = age;

  }

  _createClass(Parent, [
    {
      key: 'speakSomething',
      value: function speakSomething() {
        console.log('I can speek chinese');
      },
    },
  ]);

  return Parent;
})();

var p = new Parent('haha', 3)
console.log('%c⧭', 'color: #ff0000', p);
