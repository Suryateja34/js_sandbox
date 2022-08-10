//Mouse Events 

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
const title = document.querySelector('title');


//Click 
clearBtn.addEventListener('click',
runEvent);
//Double click 
clearBtn.addEventListener('dblclick', runEvent);
//Mouse Down 
clearBtn.addEventListener('mousedown', runEvent);
//Mouse up
clearBtn.addEventListener('mouseup',runEvent);
//Mouse Enter 
clearBtn.addEventListener('mouse enter',runEvent);
//mouse enter for card
card.addEventListener('mouseenter',runEvent);
//Mouse leave
card.addEventListener('mouseleave',runEvent);
//Mouseover and mousout are same as mouseenter and mouseleave but the latter are for main element but the former are for element inside the main element
card.addEventListener('mouseover',runEvent);
card.addEventListener('mouseout',runEvent);
//Mousemove
card.addEventListener('mousemove',runEvent);
//display the co ordinates of the mouse 




//Event handler 
function runEvent(e){
  console.log(`EVENT TYPE ${e.type}`);

  heading.textContent = `MouseX:${e.offsetX}MouseY:${e.offsetY}`;
  title.textContent = `MouseX:${e.offsetX}MouseY:${e.offsetY}`;


  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
  
} 
