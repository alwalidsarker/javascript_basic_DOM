/*

call can be used as a helper of this keyword means with the help of it we can define 'this',
call can get unlimited parameteres but the 1st one will be 'this', rest of them will be the function's parameter
call immediately calls the following function

*/
const karim = {
  name : 'karim',
  dob : 1999,
  age : function(currentYear){
    console.log(`${currentYear - this.dob} years old is ${this.name}`);
  },
};
const rahim = {
  name : 'rahim',
  dob : 1990,
};
// karim.age(2024); //normal
// karim.age.call(rahim,2024); //abnormal