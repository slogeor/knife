new Promise(function (resolve) {
  console.log('1');
  resolve();
}).then(function () {
  console.log('2')
})

const p = Promise.resolve();

setTimeout(() => {
  console.log('3');
}, 0);

(async () => {
  await p;
  console.log('4');
})();


p.then(() => console.log('5'))
  .then(() => console.log('6'));

// 1 2 4 5 6 3
