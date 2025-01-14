// ЗАДАЧА №1. ФУНКЦИЯ 1
function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const totalSum = arr.reduce((x, y) => x + y);
  const avg = totalSum / arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

// ЗАДАЧА №2. ФУНКЦИЯ 1
function summElementsWorker(...arr) {
  let arraySum = 0;

  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }
  return arraySum;
}

// ЗАДАЧА №2. ФУНКЦИЯ 2
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

// ЗАДАЧА №2. ФУНКЦИЯ 3
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

// ЗАДАЧА №2. ФУНКЦИЯ 4
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

// ЗАДАЧА №3. ФУНКЦИЯ 1
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
