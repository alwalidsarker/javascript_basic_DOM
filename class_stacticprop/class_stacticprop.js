class User {
  constructor(username){
    this.username = username;
  };
  logMe(){
    console.log(`${this.username} has logged in !`);
  };
  static createId(){
    return `123`;
  }; // we use static here to not to give access to others the same value
};
let user_one = new User('walid_sarker');
// console.log(user_one.createId())
class teacher extends User { //user is the (parent constructor) class
  constructor(username,email){
    super(username);
    this.email = email;
  };
};
const iphone = new teacher('iphone', 'iphone@gmial.com');
// console.log(iphone.logMe());
// console.log(iphone.createId()); // will not work beacause it has seted (static) 