function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const totalSum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0);
  const avg = totalSum / arr.length;
  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(-99, 99, 10)); 
console.log(getArrayParams(1, 2, 3, -100, 10));  
console.log(getArrayParams(5));


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
