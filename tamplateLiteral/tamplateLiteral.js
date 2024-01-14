// ${}
function aFunc(string,name,age){
  console.log(`String:`);
  console.log(string);
  console.log(`name : ${name}`);
  console.log(`string : ${age}`);
};
let name = 'walid';
let age = 23;
// aFunc`i'm ${name}. i am ${age} years old`
aFunc`'no'${name}${age}`