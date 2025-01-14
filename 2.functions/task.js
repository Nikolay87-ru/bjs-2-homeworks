function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const totalSum = arr.reduce((x, y) => x + y);
  const avg = totalSum / arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  let arraySum = 0;

  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }

  return arraySum;
}

function differenceMaxMinWorker(...arr) {
  let maxValue = arr[0];
  let minValue = arr[0];

  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    } else if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }

  return maxValue - minValue;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const functionResult = func(...arrOfArr[i]);

    if (functionResult > maxWorkerResult) {
      maxWorkerResult = functionResult;
    }
  }
  
  return maxWorkerResult;
}
