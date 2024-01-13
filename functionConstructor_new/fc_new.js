// at the end of prototype_chain we will find null
/*
javascript's built in constructor fucntions =>
(.) => Array();
(.) => String();
(.) => Number();
(.) => Boolean();
(.) => Date();
*/
// we can create a constructor fucntions of our own

/*
  think we have to make many obj which have {name:job:age} vales at a time ( it will be too much )
  that's why we will use constructor function or blue_print
*/
//making a blue print:
let Person = function( name, job, age){
  this.name = name;
  this.job = job;
  this.age = age;
};
let main = new Person('walid','js',20);
let main2 =  new Person('sijan','py',20);
// console.log(main);

//complex tree
let user = function( name, langauage, country, bornDate){
  this.name = name;
  this.langauage = langauage;
  this.country = country;
  this.bornDate = bornDate;
  this.age = function(){
    console.log(`${ 2024 - this.bornDate} is your age `);
  };
};
let walidUser = new user('walid','js','bangaldesh',2007);
// console.log(walidUser);
let walidBind = walidUser.age.bind(walidUser);
// let walidBind = walidUser.age.bind(user); //error
walidBind()