Function.prototype.newCall = function (ctx) {
  console.log('%c⧭', 'color: #00e600', ctx);

  ctx = ctx || window;

  ctx.func = this;

  const args = Array.from(arguments).slice(1);

  const res = args.length > 0 ? ctx.func(...args) : ctx.func();

  delete ctx.func;

  return res;
};

// function Fn(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var obj = {};

// var res = Fn.newCall(obj, 'haha', 13);
// console.log('%c⧭', 'color: #ff0000', res);
// console.log('%c⧭', 'color: #733d00', obj);

Function.prototype.newApply = function (ctx) {
  ctx = ctx || window;

  ctx.func = this;

  const args = Array.from(arguments)[1];

  const res = args.length > 0 ? ctx.func(...args) : ctx.func();

  delete ctx.func;

  return res;
};

// function Fn(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var obj = {};

// var res = Fn.newApply(obj, ['haha', 13]);
// console.log('%c⧭', 'color: #ff0000', res);
// console.log('%c⧭', 'color: #733d00', obj);

var obj = {
  x: 123,
};

function getX(y) {
  return this.x + y;
}

Function.prototype.newBind = function (ctx) {
  ctx = JSON.parse(JSON.stringify(ctx)) || window;

  ctx.func = this;

  const args = Array.from(arguments).slice(1);

  return function () {
    const otherArgs = Array.from(arguments);
    const allArgs = args.concat(otherArgs);

    return allArgs.length > 0 ? ctx.func(...allArgs) : ctx.func();
  };
};

var getObjX = getX.newBind(obj);
var res = getObjX(12);
console.log('%c⧭', 'color: #0088cc', res);
