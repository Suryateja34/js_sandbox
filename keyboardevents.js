//kEYBOARD EVENTS
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//clear input
taskInput.value = '';
//Keydown 
taskInput.addEventListener('keydown',runEvent);
//Keyup 
taskInput.addEventListener('keyup',runEvent);
//keypress
taskInput.addEventListener('keypress',runEvent);
//Focus it is fired off when you click on the enter task button 
taskInput.addEventListener('focus',runEvent);
//Blur opposite to the focus
taskInput.addEventListener('blur',runEvent);
//Cut
taskInput.addEventListener('cut',runEvent);
//paste
taskInput.addEventListener('paste',runEvent);
//copy
taskInput.addEventListener('copy',runEvent);
//INput it fires off all of the above mentioned things 
taskInput.addEventListener('input',runEvent);
//Change 
select.addEventListener('change',runEvent);





//form.addEventListener('submit',runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  heading.innerText = e.target.value; 
  e.preventDefault();
  //Get input value
  console.log(taskInput.value);


}
