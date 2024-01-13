document.getElementById().getAttribute("id");
//getattributes acts like a function that's why we have to give parameters in it as like "id"
document.getElementById().setAttribute("id","walid");
//getattributes acts like a function that's why we have to give parameters in it as well as value of it as like "id", "wlaid"




//selectors
document.getElementsByTagName();
document.querySelector(); 
document.querySelectorAll(); //gives ans in nodelist it may seem array but it is not an array
document.getElementById();
document.getElementsByClassName();




const val_one = document.querySelector("#main").textContent;
//textContent works on visible or invisible html elements as like if I set (display:none) at an attribute it will be showing the right one through textContent
const val_two = document.querySelector("#main").innerText;
//innerText works on visible html elements as like if I set (display:none) at an attribute it will not be showing the right one through innerText
const val_three = document.querySelector("#main").innerHTML;
// ('<p>I am <span>walid</span> sarker</p>') if I set this innerHTML to a tag it will give me the whole structure of that tag as like the example
// we use these to get the content of a tag




document.querySelectorAll("li"); //gives ans in nodelist it may seem array but it is not an array
const li = document.querySelectorAll("li");
li.style.color = "red";// it will not work because it is a nodelist which is likely similar to array
li[0].style.color = "red";// it will work (we have to declare the index number)
//we can use forEach method in here




document.getElementsByClassName("li"); //gives ans in HTMLCollection it may seem array but it is not an array
const li = document.querySelectorAll("li");
li.style.color = "red";
li[0].style.color = "red"; // i can use it too
//we can not use forEach method in here
// we have to convert HTMLCollection in array
Array.from(li);




const main = document.querySelector(".parent");
const child = document.querySelector(".child");
console.log(main.children); //it will give you answer in HTMLCollection 
console.log(main.firstElementChild);
console.log(main.lastElementChild);
console.log(child.parentElement); 
console.log(child.nextElementSibling);
console.log(main.childNodes); // a complex data Tree structure




const h1 = document.createElement("h1");
h1.className = "walid's_h1";
h1.id = "walid's_id";
h1.setAttribute("title", "walid"); // by it's help you can add any thing in a tag as like title, calss, id 
const addText = document.createTextNode("chai aur code");
h1.appendChild(addText);
h1.removeAttribute();




const one = document.querySelector(".walid");
one.addEventListener("click",(e) => {
  console.log(e);
  alert("I am walid");
  e.stopPropagation();
  e.preventDefault();
  e.target.id; //(.target gives the whole element)
},false); //full form
// why false is used here (interview question);
// here "e" is an object 
// i have to study (e) in console later
// i have to study (type,timeStamp, defaultPrevent,target, toElement, srcElement, currentTarget, clientX, clientY, screenX,screenY, altKey, ctrlKey, keyCode, shiftKey)
// false = bubble
//true = capturing