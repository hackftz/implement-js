console.log(1);

new Promise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    console.log(3);
  }, 10);
});

console.log(4);
