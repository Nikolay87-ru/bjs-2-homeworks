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
debugger;
class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }

  checkSides() {
    let result1 = this.sideOne + this.sideTwo < this.sideThree;
    let result2 = this.sideOne + this.sideThree < this.sideTwo;
    let result3 = this.sideTwo + this.sideThree < this.sideOne;

    if (result1 || result2 || result3) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    const perimeter = this.sideOne + this.sideTwo + this.sideThree;
    return perimeter;
  }

  get area() {
    const halfPer = this.perimeter * 0.5;
    const area = Math.sqrt(
      halfPer *
        (halfPer - this.sideOne) *
        (halfPer - this.sideTwo) *
        (halfPer - this.sideThree)
    );
    return +area.toFixed(3);
  }

  getTriangle(sideOne, sideTwo, sideThree) {
    try {
      const triangle = new Triangle(sideOne, sideTwo, sideThree);
      triangle.checkSides();
      return triangle;
    } catch (error) {
      return {
        area: () => "Ошибка! Треугольник не существует",
        perimeter: () => "Ошибка! Треугольник не существует",
      };
    }
  }
}

const triangle = new Triangle(2, 5, 500);

console.log(new Triangle(2, 5, 500));
console.log(triangle.perimeter);
console.log(triangle.area);
