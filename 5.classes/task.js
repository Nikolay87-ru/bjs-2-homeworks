let fix = "fixBook";

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
    super(name, releaseDate, pagesCount, type);
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

// ЗАДАЧА #2

debugger;
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book, magazine, state) {
    if (state > 30) {
      if (book) {
        this.books.push(book);
      } else if (magazine) {
        this.books.push(magazine);
      }
    }
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.books);

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
