let People = function( name,age,job ){
  this.name = name;
  this.age = age;
  this.job = job;
};
let peopleWalid = new People('Al Walid Sarker', 13,"Engineer");
let Teacher = function(name,age,job,subject){
  People.bind(this,name,age,job)();
  this.subject = subject;
};
let sijanTeacher = new Teacher('Jonayed Kawsar Sijan',16,'Teacher','Computer Science');
console.log(sijanTeacher);