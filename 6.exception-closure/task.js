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

try {
  validateCount(value);
} catch (error) {
  return error.message;
}
