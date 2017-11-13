const arr = [1, 2, 3];
try {
  console.log(Array(1, 2, 3).includes(2));
} catch (e) {
  throw e;
}

const findEl = Array.find(arr, function (el) {
  return el === 1;
});
console.log(findEl);
