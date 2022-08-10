//Local and session storage 
//set local item 
// local storage untill you manually clear it but session storage will be removed when you leave the browser

localStorage.setItem('name','john');
 localStorage.setItem('age','30');
 sessionStorage.setItem('name','beth');
//Remove from storage 
localStorage.removeItem('name');


//Get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name,age); 

//Clear Local storage
localStorage.clear();
 
document.querySelector('form').addEventListener('submit',function(e){
  const task = document.getElementById('task').value;

  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);
  
  localStorage.setItem('tasks',JSON.stringify(tasks));
  alert ('Task Saved');

  e.preventDefault();


});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
})


