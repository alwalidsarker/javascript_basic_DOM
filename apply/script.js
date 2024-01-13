/*

apply can be used as a helper of this keyword means with the help of it we can define 'this',
apply can get only two parameteres but the 1st one will be 'this', the rest will be an [] list
apply immediately calls the following function

*/
const karim = {
  name : 'karim',
  dob : 1999,
  age : function(currentYear,greeting,food){
    console.log(`${currentYear - this.dob} years old is ${this.name}`);
    console.log(greeting);
    console.log(food);
  },
};
const rahim = {
  name : 'rahim',
  dob : 1990,
};
// karim.age(2024); //normal
// karim.age.apply(rahim,[2024,'Hi, nice','burger']); //abnormal