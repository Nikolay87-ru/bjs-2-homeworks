let fix = "fixBook";

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
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
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// ЗАДАЧА #2

debugger;
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      if (book) {
        this.books.push(book);
      }
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    let removedBook = null;
    bookName = this.books.forEach((book, index) => {
      if (book.name === bookName && index !== -1) {
        removedBook = this.books[index];
        return this.books.splice(index, 1)[0];
      }
    });
    return removedBook;
  }
}

// const library = new Library("Библиотека имени Ленина");

// library.addBook(
//   new DetectiveBook(
//     "Артур Конан Дойл",
//     "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//     2019,
//     1008
//   )
// );
// library.addBook(
//   new FantasticBook(
//     "Аркадий и Борис Стругацкие",
//     "Пикник на обочине",
//     1972,
//     168
//   )
// );
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


// Cоздайте библиотеку;
const bookWorld = new Library("Книжный мир");

// Добавьте в библиотеку несколько печатных изданий разных типов;
bookWorld.addBook(new NovelBook("Лев Толстой", "Война и мир", 1873, 1984));
bookWorld.addBook(new FantasticBook("Рэй Брэдбери", "451 градус по Фаренгейту", 1953, 288));

// Найдите книгу, изданную в 1919 году, или создайте её при необходимости;
console.log(bookWorld.findBookBy("releaseDate", 1919)); 

// Выдайте любую книгу;
console.log("Количество книг до выдачи: " + bookWorld.books.length); 
let givenAwayBook = bookWorld.giveBookByName("Война и мир");
console.log("Количество книг после выдачи: " + bookWorld.books.length);

// Повредите выданную книгу;
console.log(givenAwayBook.state = 25);

// Восстановите выданную книгу;
givenAwayBook.fix();
console.log(givenAwayBook.state);

// Попытайтесь добавить восстановленную книгу обратно в библиотеку;
bookWorld.addBook(givenAwayBook);
console.log("Количество книг после возврата: " + bookWorld.books.length);

