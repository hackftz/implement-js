var promise = new Promise((resolve, reject) => {
  setTimeout(
    () => {
      console.log('promise end');
    },
    100,
    'foo'
  );
});

Promise.all([promise]).then(res => {
  console.log(res);
  console.log('end');
});
