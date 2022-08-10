//Functions they are defined and can be called anytime!!
//Function declarations

// First method
function greet(){
  console.log('Hello');
}
greet();

//Second method
function greet(){
  return 'Hello';
}
console.log(greet());

function greet(firstName,lastName){
  return 'Hello' + ' ' + firstName + ' ' + lastName ;
}
console.log(greet('Surya','Teja'));


//Function expressions
const square = function(x=3){
  return x*x ;
}

console.log(square());

//IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS i.e, IIFE's


(function(name){
   console.log('Hello' + name);
})(' Surya Teja');
//Property methods
const todo = {
  add : function(){
    console.log('Add todo....');
  },
  edit : function(id){
    console.log(`Edit todo ${id}`);
  },
  delete : function(){
    console.log('Delete todo...');
  }
}
todo.add();
todo.edit(12);
todo.delete();