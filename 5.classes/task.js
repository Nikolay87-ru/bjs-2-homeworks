let fix = "fixBook";
debugger;
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(bookState) {
    if (bookState < 0) {
      this._state = 0;
    } else if (bookState > 100) {
      this._state = 100;
    } else {
      this._state = bookState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, type = "magazine") {
    super(name, releaseDate, pagesCount, type)
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, type = "book") {
    super(name, releaseDate, pagesCount, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type = "novel") {
    super(author, name, releaseDate, pagesCount, type);
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type = "fantastic") {
    super(author, name, releaseDate, pagesCount, type);
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type = "detective") {
    super(author, name, releaseDate, pagesCount, type);
  }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
console.log(picknick.name); // "Пикник на обочине"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15
