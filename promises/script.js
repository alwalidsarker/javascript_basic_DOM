const promise = new Promise((resolve, reject) => {
  //dp an async task
  setTimeout(() => {
    console.log("ASYNC task done");
    resolve(); // declare to connect with then
  }, 1000);
}); //is an object which represtents the eventual completion or failure
/*
promises has two parts  : one = resolve (resolve doesn't need a call back functioN)
                          two = reject (reject doesn't need a call back functioN)
*/
promise.then(() => {
  console.log("promise consumed");
}); //it has directly realtion to resolve




const promiseThree = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve({name : 'walid', email : 'maxxaorwott@gmail.com', age : 20});
   },1000);
});
promiseThree.then((user)=>{
  // console.log(user);
});




const promiseFour = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let error = false; // try here both true and false  to understand
    if(!error){
      resolve({username : "walidsarker", email : "whatwas555@gmail.com"});
    }else{
      reject('Something went wrong !');
    };
  },2000);
});
promiseFour.then((user)=>{
  return user.email; // if we want values here we must have to returm the parameter
}).then((main)=>{
  console.log(main);
}).catch((error)=>{
  console.log(error);
  //catch only for the rejection of the promise
}).finally(()=>{
  console.log("nice");
});




const promiseFive = new Promise(function( resolve, reject){
  setTimeout(()=>{
    let error = true; // try here both true and false  to understand
    if(!error){
      resolve({username : "javascript", email : "whatwas555@gmail.com"});
    }else{
      reject('js went wrong !');
    };
  },2000);
});
async function promiseFiveConsumed(){
  const responce = await promiseFive
  // console.log(responce);
};
promiseFiveConsumed(); // it will give a error because it cann't handle rejection(kind of error)
// *** we have to use this insted ***//
async function promiseFiveConsumed(){
  try {
    const responce = await promiseFive
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
};
promiseFiveConsumed();
async function main(){
  try {
    const main_responce = await fetch("https://api.github.com/users/waliderprint69");
    const data = await main_responce.json();
    //they both take time to convert themself into json or data form
    console.log(data);
  } catch (error) {
    console.log(error);
  };
};
main();
fetch('https://api.github.com/users/waliderprint69')
.then((responce) => responce.json())
.then((info)=> console.log(info.followers))
.catch((error)=> console.log(error))