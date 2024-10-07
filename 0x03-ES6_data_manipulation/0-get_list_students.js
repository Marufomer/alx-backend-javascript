export default function getListStudents() {
  class Info {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }

    objectArry() {
      return {
        id: this.id,
        firstName: this.firstName,
        location: this.location,
      };
    }
  }

  const person1 = new Info(1, 'Guillaume', 'San Francisco');
  const person2 = new Info(2, 'James', 'Columbia');
  const person3 = new Info(5, 'Serena', 'San Francisco');

  return [person1.objectArry(), person2.objectArry(), person3.objectArry()];
}
