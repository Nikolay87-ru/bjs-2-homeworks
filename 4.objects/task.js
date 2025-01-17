function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
    return;
  }

  this.marks.push(...marks);
};

Student.prototype.getAverage = function () {
  if (this.marks.length > 0) {
    let totalSum = this.marks.reduce((sum, mark) => sum + mark, 0);
    return +(totalSum / this.marks.length).toFixed(1);
  }
  return 0;
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;

  this.exclude = reason;
};

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());
console.log(student1);
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude("слушает рэп");
console.log(student2);
