//Create the element 
const li = document.createElement('li');

//Add class
li.class = 'collection item';

//Add an id
li.id = 'new-item';

//Add an attribute 
li.setAttribute('title', 'New Item');

//Create text node
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
//add classes
link.className = "delete-item secondary-content";
//Add icon Html
link.innerHTML = '  <i class="fa fa-remove"></i>';

//Append link to li
li.appendChild(link);
   
//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
