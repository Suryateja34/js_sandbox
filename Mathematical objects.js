const num1 = 100;
const num2 = 50;
let val;

// simple math  with  numbers
val = num1+num2;
val = num1*num2;
val = num1-num2;
val = num1/num2;

// math oBjects 
val=Math.PI; // value od PI
val=Math.E; // Value of euler number 
val=Math.round(2.8); // Rouns off to the nearest number
val=Math.ceil(2.4); // Rounds off to the max number 
val=Math.floor(2.8);// Rpunds off to the nearest number
val=Math.sqrt(64); // Squareroot of the number 
val=Math.abs(-4); // Absolute value of the numeber
val=Math.pow(8,3); // POwer 
val=Math.min(2,4,8,9,0,11,-890);// prints the maximum number 
val=Math.max(2,4,8,9,0,11,-890); // Prints the minimum number 
val=Math.random();
//val=Math.floor(Math.random() * 20 + 1);
// to obtain a number between two limits multiply the max number needed to the Math.random(); function and the min value to it and wrap it with Math.floor function to get a whole number 
 val = Math.floor(Math.random() * 50 + 1);

console.log(val);



