export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // get name of course
  get name() {
    return this._name;
  }

  // set name of course
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // get lenghth of the course
  get length() {
    return this._length;
  }

  // set length of course
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // get students
  get students() {
    return this._students;
  }

  // set students
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be in array');
    }
    if (!value.every((stu) => typeof stu === 'string')) {
      throw new TypeError('Students must be an array of string');
    }
    this._students = value;
  }
}
