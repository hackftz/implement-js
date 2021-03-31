// function fun() {
//   return new Promise(function (resolve, reject) {
//     const random = Math.random();
//     console.log('%c%s', 'color: #007300', random);
//     if (random > 0.9) {
//       resolve(random);
//     } else {
//       reject(random);
//     }
//   });
// }

// function useRetry(fn, n) {
//   return new Promise(function (resolve, reject) {
//     let failRandom = null;

//     function go() {
//       fn()
//         .then(r => {
//           resolve(r);
//         })
//         .catch(err => {
//           failRandom = err;
//           if (--n === 0) {
//             reject(failRandom);
//             return;
//           }
//           go();
//         });
//     }

//     go();
//   }).catch(err => {
//     console.log(err);
//   });
// }

// useRetry(fun, 5)
//   .then(res => {
//     console.log('%c%s', 'color: #f200e2', res);
//   })
//   .catch(err => {
//     console.log('%c%s', 'color: #731d1d', err);
//   });
