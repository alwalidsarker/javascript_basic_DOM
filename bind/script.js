/*

bind can be used as a helper of this keyword means with the help of it we can define 'this',
bind can get only two parameteres but the 1st one will be 'this', rest of will be the parameteres if the following function
bind cann't immediately call the following function but it returns function defination (this return can be used or called anywhere)
bind is the most useful between call and apply

*/
const karim = {
  name : 'karim',
  dob : 1999,
  age : function(currentYear,greeting,food){
    console.log(`${currentYear - this.dob} years old is ${this.name}`);
  },
};
const rahim = {
  name : 'rahim',
  dob : 1990,
  value : function(){
    console.log(`${this.name} is my name`);
  },

};
let mainOne = rahim.value.bind(karim);
// mainOne() //because that one returns a function defination that's why i can store it to a variable and call it later

let user = {
  name : 'walid',
  dob : 1998,
  age : function(currentYear,msg){
    console.log(`${msg} ${this.name} is ${currentYear - this.dob} years old`);
  }
};
let customer = {
  name : 'sijan',
  dob : 1990,
};
let mainTwo = user.age.bind(customer);
mainTwo(2024,'hi');
//never use arrow function in this case
//we can use parameter later as u can see