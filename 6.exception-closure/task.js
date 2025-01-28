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
    const halfPerim = this.perimeter * 0.5;
    const area = Math.sqrt(
      halfPerim *
        (halfPerim - this.sideOne) *
        (halfPerim- this.sideTwo) *
        (halfPerim - this.sideThree)
    );
    return +area.toFixed(3);
  }
}

function getTriangle(sideOne, sideTwo, sideThree) {
  try {
    return new Triangle(sideOne, sideTwo, sideThree);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
