function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const totalSum = arr.reduce((x, y) => x + y);
  const avg = totalSum / arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

// function summElementsWorker(...arr) {

// }

// function differenceMaxMinWorker(...arr) {

// }

// function differenceEvenOddWorker(...arr) {

// }

// function averageEvenElementsWorker(...arr) {

// }

// function makeWork (arrOfArr, func) {

// }
