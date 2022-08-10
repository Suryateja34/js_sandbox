// Block scope with let and const
// Global scope
var a = 1;
let b = 2;
const c = 3;

 function test(){
   var a = 4;
   let b = 5;
   const c = 6;
   console.log('Function scope :', a,b,c);
 }
 test();

 if(true){
  //Block scope
   var a = 4;
   let b = 5;
   const c = 6;
   console.log('If scope:', a , b, c);
   }

for (var a=0;a<10;a++){
  console.log(`Loop ${a}`);
}
console.log('Global Scope' , a , b, c);

// ** In global scope and function both let var and const are not equal to each other like they are different varaibles ** 
// ** But in block scope var will not be  equal to that of global scope but let and const will be equal to global scope ** i.e, var in loop will change the variable in the global scope!!


