// this is a literal object ---------------------------------------------------------------------------
const user = {
  username: "walid",
  logC: 8,
  signin: true,
  main: function () {
    // console.log("i am here bro");
    // console.log(this.username); // it refers to current context
    console.log(this); // it has given the full data
  },
}; // this is a literal object
// console.log(user.main()); // i have to call it if i want to see it's value

// constructor function ---------------------------------------------------------------------------
// const promise = new Promise(); //here the new is constructor function
// const date = new Date(); //here the new is constructor function
function main(name, course, price) {
  this.name = name;
  this.course = course;
  this.price = price;
  return this;
  /*
  explanation : 
  in here (this) is working like funcion's this
  that's why this will be empty in here
  when we are adding (this.name ) it means we are adding name in (this)
  at last when we returned this (we have returned a full object in that function) 
  implcite return will work in here that means if i haven't given any return keyword in that function it will the same as it was working
  */
}
main();
const userOne = new main("walid", "javascript", 2000);
const userTwo = new main("sarker", "python", 3870);
// console.log(userOne); //now userTwo has overwrited the values of the function
// console.log(userTwo);

// prototype ---------------------------------------------------------------------------
/*javascript's default behaviour is protype behaviour  */