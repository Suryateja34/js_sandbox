//LOOPS AND ITERATIONS 
 // FOR loop
 for(let i=0; i<10; i++){
  if(i === 2){
    console.log('2 is my favourtie number');
    continue;
  }
  if(i ===5 ){
    console.log('Loop stops!!');
    break;
  }

}   


// while loop

let i = 0;
while(i<10){
 console.log('Number ' + i);
 i++;
}

//DO WHILE LOOP it always runs once no matter what !!

let i = 110;
do{
 console.log('Number ' + i);
 i++
}

while(i<10);

//  array loops

const cars = ['Ford','Chevy','Honda','Toyota'];
for(i=0;i < cars.length;i++){
console.log(cars[i]);
}

// ForEach(function()) loop

cars.forEach(function(car,index , array){
console.log(`${index} : ${car}`);
console.log(array);

})

const users = [
{id : 1 , name:'Johan'},
{id : 2 , name : 'Sruthi'},
{id : 3 , name : 'Surya'},
{id : 4 , name : "Steve"},

];

const ids = users.map(function(user){
 return user.id;
})
console.log(ids);

// for in loop used for objects !!!

const user = {
  firstName: 'John',
  lastName:'Doe',
  age:40,
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);

}