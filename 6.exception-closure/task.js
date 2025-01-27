const parseCount = (value) => {
  const number = Number.parseFloat(value);

  if (Number.isNaN(number)) {
    throw new Error("Невалидное значение");
  }

  return number;
};

const validateCount = (value) => {
  debugger;
  const result = parseCount(value);
  try {
    return result;
  } catch (error) {
    return error.message;
  }
};

console.log(validateCount("56.65"));
console.log(validateCount("ыфва"));
