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

    if (this.checkSides()) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  checkSides() {
    return (
      this.sideOne + this.sideTwo < this.sideThree ||
      this.sideOne + this.sideThree < this.sideTwo ||
      this.sideTwo + this.sideThree < this.sideOne
    );
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
      return new Triangle(sideOne, sideTwo, sideThree);
    } catch (error) {
      return {
        area() { return "Ошибка! Треугольник не существует"; },
        perimeter() { return "Ошибка! Треугольник не существует"; }
      }
    };
  }
}

const triangle = new Triangle(1,3,100);
console.log(Triangle.getTriangle(1,3,100));
console.log(Triangle.perimeter);
console.log(Triangle.area);


