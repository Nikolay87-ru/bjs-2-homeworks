const parseCount = (value) => {
  const number = Number.parseFloat(value);

  if (Number.isNaN(number)) {
    throw new Error("Невалидное значение");
  }
  return number;
};

const validateCount = (value) => {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
};

// ЗАДАЧА №2 - ТРЕУГОЛЬНИК

class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }

  toBeDefined() {
    let result1 = this.sideOne + this.sideTwo < this.sideThree;
    let result2 = this.sideOne + this.sideThree < this.sideTwo;
    let result3 = this.sideTwo + this.sideThree < this.sideOne;

    if (result1 || result2 || result3) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

}

console.log(new Triangle(1,3,3).toBeDefined());
