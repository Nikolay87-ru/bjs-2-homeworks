class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
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

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
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
        return this.books.splice(index, 1);
      }
    });
    return removedBook;
  }
}

// Cоздайте библиотеку;
const bookWorld = new Library("Книжный мир");

// Добавьте в библиотеку несколько печатных изданий разных типов;
bookWorld.addBook(new NovelBook("Лев Толстой", "Война и мир", 1873, 1984));
bookWorld.addBook(new FantasticBook("Рэй Брэдбери", "451 градус по Фаренгейту", 1953, 288));

// Найдите книгу, изданную в 1919 году, или создайте её при необходимости;
console.log(bookWorld.findBookBy("releaseDate", 1919)); // null

// Выдайте любую книгу;
console.log("Количество книг до выдачи: " + bookWorld.books.length); // Количество книг до выдачи: 2
const deletedBook = bookWorld.giveBookByName("Война и мир");
console.log("Количество книг после выдачи: " + bookWorld.books.length); // Количество книг после выдачи: 1

// Повредите выданную книгу;
console.log((deletedBook.state = 25)); // 25

// Восстановите выданную книгу;
deletedBook.fix();
console.log(deletedBook.state); // 37.5

// Попытайтесь добавить восстановленную книгу обратно в библиотеку;
bookWorld.addBook(deletedBook);
console.log("Количество книг после возврата: " + bookWorld.books.length); // Количество книг после возврата: 2

// ЗАДАЧА #3

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, lesson) {
    if (mark > 1 && mark < 6) {
      if (!this.marks[lesson]) {
        this.marks[lesson] = [];
      }
      this.marks[lesson].push(mark);
    }
  }

  getAverageBySubject(lesson) {
    const lessonMarks = this.marks[lesson];

    if (!lessonMarks || lessonMarks.length === 0) {
      return 0;
    }

    const sumMarks = lessonMarks.reduce((acc, mark) => acc + mark);
    return sumMarks / lessonMarks.length;
  }

  getAverage() {
    let totalSumMarks = 0;
    let countMarks = 0;

    const lessons = Object.keys(this.marks);

    lessons.forEach((lesson, marksCount) => {
      const averageMarkLesson = this.getAverageBySubject(lesson);
      marksCount = this.marks[lesson].length;

      totalSumMarks += averageMarkLesson * marksCount;
      return countMarks += marksCount;
    });

    if (!countMarks || countMarks === 0) {
      return 0;
    };

    const averageMarks = totalSumMarks / countMarks;
    return averageMarks;
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.marks); // { 'химия': [ 5, 5 ], 'физика': [ 5, 4 ] }
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage()); // Средний балл по всем предметам 4.75
