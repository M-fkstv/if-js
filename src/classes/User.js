const studentsData = [
  {
    firstName: "Василий",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Java",
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    admissionYear: 2018,
    courseName: "JavaScript",
  },
  {
    firstName: "Александр",
    lastName: "Федоров",
    admissionYear: 2017,
    courseName: "Python",
  },
  {
    firstName: "Николай",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Android",
  },
];

const sortStudentsData = [...studentsData].sort((a, b) =>
  a.admissionYear > b.admissionYear ? -1 : 1
);

console.log(sortStudentsData);

class User {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get() {
    return this.fullName();
  }

  fullName() {
    return ` ${this.firstName}, ${this.lastName}`;
  }
}

const user = new User({
  firstName: "Иван",
  lastName: "Петров",
});

console.log(user); //   User {firstName: 'Иван', lastName: 'Петров'}
console.log(user.get()); // Иван Петров
console.log(typeof User); // function!!! класс это функция???

class Student extends User {
  constructor({ admissionYear, courseName, firstName, lastName }) {
    super({ firstName, lastName });
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  getCourse() {
    return `${date.getFullYear() - this.admissionYear} ${"курс"}`; //   или так  + " " + `${"курс"}`
  }
}

const date = new Date();
const student = new Student({
  admissionYear: 2017,
  courseName: "android",
  firstName: "Иван",
  lastName: "Петров",
});

console.log(student); // Student {firstName: 'Иван', lastName: 'Петров', admissionYear: 2017, courseName: 'android'}
console.log(student.getCourse()); //5 курс

class Students extends Student {
  constructor({
    sortStudentsData,
    admissionYear,
    courseName,
    firstName,
    lastName,
  }) {
    super({ admissionYear, courseName, firstName, lastName });
    this.sortStudentsData = sortStudentsData;
  }

  getData() {
    return this.sortStudentsData;
  }
  course() {
    return date.getFullYear() - student.admissionYear;
  }

  getFullName() {
    return `${student.firstName} ${student.lastName}`;
  }

  courseCount() {
    return `${this.course()} ${"курс"}`;
  }
  getCourseName() {
    return `${student.courseName}`;
  }
  toString() {
    return `[${this.getFullName()}, ${this.getCourseName()} - ${this.courseCount()}]`;
  }

  getInfo() {
    return sortStudentsData.map(
      (item) =>
        `${item.firstName} ${item.lastName}, ${item.courseName} - ${
          date.getFullYear() - item.admissionYear
        } ${"курс"}`
    );

    // for (const student of sortStudentsData) {
    //   console.log([
    //     `${student.firstName} ${student.lastName}, ${student.courseName} - ${
    //       date.getFullYear() - student.admissionYear
    //     } ${"курс"}`,
    //   ]);
    // }
  }
}

const students = new Students(sortStudentsData);

console.log(students);
console.log(students.getData());
console.log(students.getFullName()); //Иван Петров
console.log(students.courseCount()); // 5 курс
console.log(students.getCourseName()); // android
console.log(students.getInfo()); // Нужный массив
console.log(students.toString()); //[Иван Петров, android - 5 курс]
