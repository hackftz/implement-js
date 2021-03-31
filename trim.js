String.prototype.trim = function() {

  // while(!this.charAt(this.length - 1)) {
  //   this = this.slice(this.length - 1)
  // }
}

// String.prototype.trim = function() {
//   return  this.replace(/^\s+|\s+$/g, '');
// }

console.time();

var str = '        fdafdasfsdafrter          '

var res = str.trim()
console.log('%c%s', 'color: #994d75', res);

console.timeEnd();