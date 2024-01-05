let name = "walid";
let heros = ["thor", "spiderman"];
let heropower = {
  thor: "hammer",
  spiderman: "web",
  getspiderpower: function () {
    console.log(`His power is ${this.spiderman}`);
  },
};
Object.prototype.walid = function () {
  console.log("I am an object");
}; // (all in js is an object => string, array, function) (that means if i give a superpower in OBJECT directly then it wil similarly added into all(array, string, function))
// heropower.walid(); // it works on here
// heros.walid(); // it works on TOO
Array.prototype.new = function () {
  console.log("main one is here");
};
// heros.new(); // works here because i gave a prototype in array
// heropower.new();  //  will not work here because i gave a prototype in array not in an object

//inheritence

//old
const user = {
  name: "walid_sarker",
};
const teacher = {
  makeVideo: true,
};
const support = {
  isAvailable: false,
};
const taSupport = {
  makeAssignment: "js",
  fulltime: true,
  __proto__: support,
};
teacher.__proto__ = user;
// console.log(teacher["name"]); //with the help of(__proto__) we can have other object's key and values

//modern
Object.setPrototypeOf(teacher, user); // we can use (setPrototypeOf) inted of (__proto__).... we will use this because it is modern
// in here we are saying that (teacher) can have access to all keys and values of user
//these are prototypal inheritance

let new_name = "walidsakrer       ";
String.prototype.trueOne = function () {
  console.log(`${this}`);
  console.log(`${this.trim().length}`);
};
// new_name.trueOne();

let names = 'google at switzerland';
String.prototype.change = function(){
  console.log(`${this.replace('google','microsoft')}`);
}
// names.change();