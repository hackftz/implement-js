Function.prototype.newBind = function (ctx) {
  console.log('%c⧭', 'color: #735656', ctx);
  ctx = ctx || window;

  const initArgs = Array.from(arguments).slice(1);

  ctx.fun = this;

  return function () {
    const newArgs = Array.from(arguments);
    return ctx.fun(...initArgs, ...newArgs);
  };
};

var obj = {
  name: 'bob',
};

function getName(msg) {
  return this.name + ' say ' + msg;
}

var call = getName.newBind(obj);

var res = call('hello');
console.log('%c%s', 'color: #1d3f73', res);
