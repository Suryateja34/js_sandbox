// //Events and event listner
document.querySelector('.clear-tasks').addEventListener('click ',function(e){
  console.log('Hello World');
 
   //e.preventDefault();
 });
 
 document.querySelector('.clear-tasks').addEventListener('click',onClick)
 
 function onClick(e){
   console.log('Hello World');
 }
  
 // //addEventListner takes two things one is the thing that makes the event start in this case click and second one is an anonymous function that happens when you do the thing in this case click 
 document.querySelector('.clear-tasks').addEventListener('click',onclick);
 
 function onclick(e){
   //console.log('Clicked');
 
   let val;
   val = e;
 
   //Event tarhet element 
   val = e.target;
   val = e.target.id;
   val = e.target.className;
   val = e.target.classList;
 
   e.target.innerText = 'Hello';
 
   // Event type
 
   val = e.type;
 
   //Time stamp
   val = e.timeStamp;
 
   //Co-ordinates relative to the window
   val = e.clientY;
   val = e.clientX;
 
   //Co-ordinates relative to the element 
   val = e.offsetY;
   val = e.clientX;
 
 
   console.log(val);
 
 }
 