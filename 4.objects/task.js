function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.setSubject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (Student.marks === null || undefined) {
    Student.marks === 'Студент отчислен!';
  }

  this.addMarks = [...marks];
}

Student.prototype.getAverage = function () {
  if (Student.marks !== null || undefined) {
    return Student['marks'].reduce((sum, mark) => +((sum + mark) / Student.marks.length).toFixed(1));
  }
  return 0;
}

Student.prototype.exclude = function (reason) {
  const { marks, subject, ... Student } = Student;
  this.exclude = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());
console.log(student1);
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);