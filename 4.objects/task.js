function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  this.exclude = null;
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


