//Array and array methods
//create some arrays 
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['apple','bannana','orange','pear'];
const mixed =[22,'Hello',true,undefined,null,{a:1,b:1},new Date()];

let val;
//get array length 
val = numbers.length;
//check is if array
val = Array.isArray(numbers);
//get a single value
val = numbers[3];
val = numbers[0];
// //Insert into array 
numbers[2] = 100;
// // find index of value
val = numbers.indexOf(36);

//Mutating of arrays 
// Add on to the end
 numbers.push(250);
// add on to the front
 numbers.unshift(120);
//TAKE OFF FROM THE END
numbers.pop();
 //Take off from the front
  numbers.shift();
  //splice values
 numbers.splice(1,3);
//reverse the array
 // numbers.reverse();


 //concatanate
 val = numbers.concat(numbers2);

 //sorting arrays
 val = fruit.sort();
 val = numbers.sort();

 // use the "compare" functions 
 val = numbers.sort(function(x,y){
   return x - y;

 });
 // reverse sort 
 val = numbers.sort(function(x,y){
   return y - x;

});

//find
//declare a function return the parameter needed 
 function under50(num){
   return num < 50 ;

}


val = numbers.find(under50);

val = numbers.push(55,54,53,51);

function over50(num){
  return num > 50 ;

}
val = numbers.find(over50);


console.log(numbers);
console.log(val);

