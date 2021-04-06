// function debounce(fn, time, delayTime) {
//   let timer = null

//   return function() {
//       clearTimeout(timer)
//       let timer = setTimeout(() => {
//         fn()
//       }, time)
//   }
// }

// var func = function() {
//   console.log(123)
// }

// var f = debounce(func, 1000)

// lodash.debounce()
// 第三个参数


// async function getDatas(urls, max) {
//   let count = 0
//   let initUrls = urls.slice(0, max)
//   let pendingUrls = urls.slice(max)
//   let waiting = []
  
//   return new Promise((resolve, reject) => {
//       initUrls.forEach(async url => {
//           await fetch(url).then(res => {
//               count++
//               if (count === urls.length) {
//                   resolve()
//               }
//               initUrls.push(pendingUrls.shift())
//           })
          
//       })
//   })
// }

// 多次请求怎么只拿到最后一次结果
