// Removing and replacing elements 

//replacing element 

const newHeading = document.createElement('h2');
//Add id 
// We can see the existing id of the element in html file 

newHeading.id ='task-title';

//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');

//the parent of the given h5 is card action 
// parent 
const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newHeading,oldHeading);

// REMOVE ELEMENT 

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//REMOVE LIST ITEMS BY TWO METHODS 
//By remove(); method
lis[0].remove();
//By removing child from ul 
list.removeChild(lis[2]);

// Classes and attributes 

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//Attributes 
val = link.getAttribute('href');
val = link.getAttribute('class');
val = link.setAttribute('href','http://google.com');
val = link.hasAttribute('href');
val = link.hasAttribute('title');
link.setAttribute('title','Google');
link.removeAttribute('title');
 
val = link;

console.log(val);
