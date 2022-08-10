// String concatenation
const firstName ="Willam";
const lastName ='Johnson';
let val;
val = firstName + lastName; 
age =22;

//concatenation 
val = firstName + " " + lastName;

//append
val = "brad ";
val += "Traversy";
val = "Hello, my name is  " +firstName + " and i am  "+age;

//escaping
val = 'That\'s awesome i can\'t wait';
// or we can use double quotes 

// conact method
val = firstName.concat(" "+lastName);
// produces same output as line 9

// changing string into all uppercase or lowercase
val = firstName.toUpperCase();
val = firstName.toLowerCase(); 
val = lastName.toUpperCase();

val = firstName[2]; // Gives letter at the position given
val = firstName.indexOf('l'); // gives the index of the given letter 
val = firstName.lastIndexOf('l'); // same as indexOf but comes from last  
val  = firstName.charAt(1); // gives the character at the given number 

// last char formula
val = firstName.charAt(firstName.length - 1);

// substrings 
val = firstName.substring(0, 4);

//slice 
//val = firstName.slice(0,4);
val = firstName.slice(-3);


// split();
val = str.split(' ');
val = tags.split(',');
// replace
val = str.replace('Hello', 'Hi');
// includes
val = str.includes('Hello')


console.log(val);

