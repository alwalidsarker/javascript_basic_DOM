/*
//paragraph
In JavaScript, the ability to use properties and methods on primitive data types, 
such as strings, is made possible through the concept of object wrappers. 
When you try to access a property or method on a primitive value, 
JavaScript automatically converts the primitive value to an object 
temporarily to allow the operation, and then converts it back to a primitive.

*/
//generally we don't have any properties and methods in string
//if we use wrapper function then we will get it
// mainly wrapper function can turn primitive data types into object
// example :
let string = new String('walid'); //(wrapper function)
let Number = new Number('walid'); //(wrapper function)
let boolean = new Boolean('walid'); //(wrapper function)