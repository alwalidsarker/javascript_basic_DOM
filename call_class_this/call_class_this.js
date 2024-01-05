// class
function my___name(my___name){
  this.my___name = my___name;
  // console.log('called');
};
function frd___name(my___name___walid,frd___name){
  // my___name(); // it is printing (called)
  my___name.call(this,my___name___walid); //make a logic to understand //here this is a parameter ( this => frd__name() )
  this.frd___name = frd___name;
};
const last = new frd___name('walid','sijan');
// console.log(last);



function personal_details(user_name, password, email){
  this.user_name = user_name;
  this.password = password;
  this.email= email;
};
function course_details(user_name_nxt, password_nxt, email_nxt,course_name, course_langauage, course_price){
  personal_details.call(this,user_name_nxt, password_nxt, email_nxt);
  this.course_name = course_name;
  this.course_langauage = course_langauage;
  this.course_price = course_price;
};
let main_details = new course_details('walid sarker', '123456789','maxxaorwott@gmail.com', 'course_javascript', 'js', 20000);



function cow(name_cow){
  this.name_cow = name_cow;
};
function dog(cow_one,name_dog){
  cow.call(this,cow_one);
  this.name_dog = name_dog;
};
let names = new dog('sijan', 'musfik');



function food(name_one,name_two){
  this.name_one = name_one;
  this.name_two = name_two;
};
function price(name_one,name_two,price_one,price_two){
  food.call(this,name_one,name_two);
  this.price_one = price_one;
  this.price_two = price_two;
};
let final = new price('Burger', 'Pizza', 190, 450);




// this
class User {
  constructor(username,email,password){ 
    this.email = email;
    this.password = password;
    this.username = username;
  };
  Password(){
    return `${this.password}`;
  };
  changeUser(){
    return `${this.username}`;
  }
};
const chai = new User('alwalidsarker','whatwas555','htmlcssjavascript');
// console.log(chai.Password());
// console.log(chai.changeUser());