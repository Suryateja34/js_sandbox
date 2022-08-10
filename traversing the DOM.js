let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;
 
// Get child nodes 
val = list.childNodes; // It returns nodelist 

val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

//Number returned from nodetype represents the following 
// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - DocType

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// children of the children
list.children[3].children[0].id = 'Test-link'; // adding an id to the children

val = list.children[3].children[0];

val = list.firstChild; // GIVES us first child node 
val = list.firstElementChild;// Gives us first element 

val = list.lastChild;
val = list.lastElementChild;

//Count child elements 
val = list.childElementCount;

// Get parents node

val = listItem.parentNode;
val = listItem.parentElement;
val =listItem.parentElement.parentElement;

//Get next sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling;

val = listItem.previousSibling;
val = listItem.previousElementSibling; 
// There will be no previous element sibling because we are dealing with first list item so there will be no previous sibling 

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(val);
// It returns Ul collection 
// ** child nodes gives all types of nodes and children gives only elements 
 