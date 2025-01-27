const parseCount = (value) => {
  const number = Number.parseFloat(value);

  if (Number.isNaN(number)) {
    throw new Error("Невалидное значение");
  }

  return number;
};

const validateCount = (value) => {
  debugger;
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
};

console.log(validateCount("56.65"));
console.log(validateCount("ыфва"));
