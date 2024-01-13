var a = 10, b = 20;
console.log(`before swap : value of a : ${a} and value of b : ${b}`);
function swap( a,b ){
  console.log(`before swap inside the function : value of a : ${a} and value of b : ${b}`);
  var temp = a;
  a = b;
  b = temp;
  console.log(`after swap inside the function : value of a : ${a} and value of b : ${b}`);
};
swap(a,b);
console.log(`after swap : value of a : ${a} and value of b : ${b}`);

var obj = {
  a : 10,
  b : 20,
};
console.log(`before swap : value of a : ${obj.a} and value of b : ${obj.b}`);
function swap( x ){
  console.log(`before swap inside the function : value of a : ${x.a} and value of b : ${x.b}`);
  var temp = x.a;
  x.a = x.b;
  x.b = temp;
  console.log(`after swap inside the function : value of a : ${x.a} and value of b : ${x.b}`);
};
swap(obj);
console.log(`after swap : value of a : ${obj.a} and value of b : ${obj.b}`);
