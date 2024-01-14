//prototype based inheritance
let Person = function(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
};
Person.prototype.dateOfBirth = function(){
  console.log(`${this.name} bron in ${2024 - this.age}`);
};
Person.prototype.country = 'Bangladesh';
let sijan = new Person('sijan',16,'engineer');
// console.log(sijan.dateOfBirth());
// console.log(sijan.country);
//object inheritance 
let Teacher = function( name,age,job,subject ){
  Person.apply(this,[name,age,job]);
  this.subject = subject;
};
let rezwanaMam = new Teacher('Rezwana Karim',27,'Teacher','Biology');
console.log(rezwanaMam);