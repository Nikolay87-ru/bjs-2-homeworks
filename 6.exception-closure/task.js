const parseCount = (stringNum) => {
  const number = Number.parseFloat(stringNum);

  if (Number.isNaN(number)) {
    throw new Error('Ввод не является числом в десятичной системе счисления');
  }

  return number;
} 

console.log(parseCount("123"));
console.log(parseCount("0.12"));

try {
  console.log(parseCount("test"));
} catch (error) {
  console.error(error.message);
}


function validateCount() {
  
} 