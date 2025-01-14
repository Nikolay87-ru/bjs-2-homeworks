// function getArrayParams(...arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   const totalSum = arr.reduce((x, y) => x + y);
//   const avg = totalSum / arr.length;

//   return { min: min, max: max, avg: +avg.toFixed(2) };
// }

function summElementsWorker(...arr) {
  let arraySum = 0;

  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }

  return arraySum;
}

console.log(summElementsWorker()); 
console.log(summElementsWorker(10, 10, 11, 20, 10));

// function differenceMaxMinWorker(...arr) {

// }

// function differenceEvenOddWorker(...arr) {

// }

// function averageEvenElementsWorker(...arr) {

// }

// function makeWork (arrOfArr, func) {

// }
