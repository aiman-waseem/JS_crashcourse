// 1) Write a function that creates a closure and returns a function that can add
//a specific number to any number passed to it. For example, if the closure is
//created with 5, the returned function should add 5 to any number passed
//to it.

function createCounter() {
    let count = 0;
    
    return function() {
      count++;
      console.log(count);
    }
  }
  
  const counter = createCounter();
  
  counter(); // Output: 1
  counter(); // Output: 2
  counter(); // Output: 3

  // 2) Write a recursive function that searches an array for a specific value. The
//function should return true if the value is found, and false if it is not. You
//can assume that the array is not nested.

const arr =[1,2,3,4];
function searchArray(arr, val) {
    if (arr.length === 0) {
      return false; // base case: array is empty
    } else if (arr.pop() === val) {
      return true; 
    } else {
      return searchArray(arr, val);
    }
  }
  console.log(searchArray(arr, 3)); 
  console.log(searchArray(arr, 6));   

// 3) Write a function that adds a new paragraph element to the bottom of an
//HTML document. The function should take a string argument that will be
//used as the text content of the new paragraph element.

function newParagraph(text){
    
        document.body.innerHTML += `<p>${text}</p>`; 
      
}
newParagraph('This is new paragraph text');

//4)Write a function that adds a new list item to an unordered list in an HTML
//document. The function should take a string argument that will be used as
//the text content of the new list item

function addNewListItem(text) {
    const list = document.querySelector("ul"); 
    const newListItem = document.createElement("li"); 
    const listItemText = document.createTextNode(text); 
    newListItem.appendChild(listItemText); 
    list.appendChild(newListItem); 

// 5) Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

const htmlElement = document.getElementById("para");
function changeBackgroundColor(element,color){
    element.style.backgoundColor=color;
}
changeBackgroundColor(htmlElement,'blue');

// 6) Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store

const myObj = { name: "Aiman", age: 20 }; // create an object to save

function saveObjectToLocalStorage(key, obj) {
    const objString = JSON.stringify(obj); // convert the object to a JSON string
    localStorage.setItem(key, objString); // save the JSON string to localStorage with the given key
  }

saveObjectToLocalStorage("myObj", myObj); // save the object to localStorage with the key "myObj"

// 7)Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


const myObjj = getObjectFromLocalStorage("myObj"); // retrieve the object stored under the key "myObj"

function getObjectFromLocalStorage(key) {
    const objString = localStorage.getItem(key); // get the JSON string from localStorage
    if (objString === null) {
      return null; // if the item doesn't exist, return null
    }
    const obj = JSON.parse(objString); // parse the JSON string into an object
    return obj; // return the object
  }  

console.log(myObjj); 

// 8) Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object

const myyObj = { name: "John", age: 30 }; // create an object to save

function saveObjectPropertiesToLocalStorage(obj) {
    const propNames = Object.keys(obj); // get an array of the object's own property names
    for (const propName of propNames) {
      const propValue = obj[propName];
      localStorage.setItem(propName, JSON.stringify(propValue)); // save the property to localStorage
    }
    const newObj = {};
    for (const propName of propNames) {
      const propValueString = localStorage.getItem(propName);
      const propValue = JSON.parse(propValueString);
      newObj[propName] = propValue; // add the property to the new object
    }
    return newObj; // return the new object
  }
  
const newObj = saveObjectPropertiesToLocalStorage(myyObj); // save the object to localStorage and retrieve it as a new object
console.log(newObj); 


}