class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Wellcome ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  } //this is a constructor of teacher
  addCourse() {
    console.log(`A new course added by ${this.username}`);
  }
}
let main = new Teacher("Hitesh", "chai@fb.com", "12etgr455tdK");
// console.log(main.addCourse());
let mainO = new User('walid');
// mainO.logMe();
// main.logMe()
console.log(main instanceof User);



