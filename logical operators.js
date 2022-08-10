//if statements 
const id = 100;
if(id == 100){
  console.log("Number is equal to 100");
}else {
  console.log("Number is not equal to 100");

}

// not equal to 

if(id != 101){
   console.log("Number is equal to 100");
}else {
   console.log("Number is not equal to 100");

}

// equal to value and type use triple '=' like === or not equal to '!=='

if(id === 100){
console.log("Number is equal to 100");
}else {
console.log("Number is not equal to 100");


// To test for undefined 

if(typeof id !== 'undefined'){
  console.log(`The id is ${id}`);
} else {
  console.log(`There is No ID`);
}

if(id <= 100){
   console.log('Correct')
} else{
    console.log('Incorrect')
}

// if else

const color ='yellow';

const color1 = color.toLowerCase();
if(color1 === 'red'){
  console.log('Color is red');
} else if(color1 === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is neither blue nor red');
}

const name = 'Surya';
const age = '19';
let age1 = Number(age);


// and 

if (age1>0 && age1 <= 13){
  console.log(`${name} is a child`);
} else if (age1 >= 14 && age1<19){
  console.log(`${name} is a teenager `);
} else{
  console.log(`${name} is an adult`);
}

// or ||

if(age<16 || age>65){
  console.log(`${name} is not allowed to race`);

}else{
  console.log(`${name} is registered for race`);
}


// ternery operators 

console.log(id === 100 ? 'Correct' : 'Incorrect');
