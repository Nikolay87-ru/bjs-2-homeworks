const parseCount = (value) => {
  const number = Number.parseFloat(value);

  if (Number.isNaN(number)) {
    throw new Error("Невалидное значение");
  }

  return number;
};

function validateCount(value) {
  debugger;
  const result = parseCount(value);

  if (!Number.isNaN(result)) {
    return result;
  }
}

console.log(validateCount("56.65"));

try {
  console.log(validateCount("ыфва"));
} catch (error) {
  console.error(error.message);
}
