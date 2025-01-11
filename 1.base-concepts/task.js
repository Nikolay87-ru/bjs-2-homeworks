"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  } else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentRate = (percent / 100) / 12;
  let creditBody = amount - contribution;

  let mounthPayment =
    creditBody * (percentRate + percentRate / ((1 + percentRate) ** countMonths - 1));
  let totalPaymentSum = mounthPayment * countMonths;
  return Number(totalPaymentSum.toFixed(2));
}
