class Class {
  constructor(number) {
    this.number = number;
  }
  getDisplayName() {
    return (`Class ${this.number}`);
  }
  assignLeader(student) {
    if (student.klass.number === this.number) {
      this.leader = student;
    } else {
      return 'It is not one of us.';
    }
  }
  appendMember(student) {
    student.klass = this;
  }
}
export default Class;