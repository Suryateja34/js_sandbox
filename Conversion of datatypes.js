let val;

 //Number to string 
 val = String(5555);
 val = String(4+4);//it will return the answer and print its length
 //Bool to string 
 val = String(true);

 // Date To string
 val = String(new Date());

 //Array to string
 val = String([1,2,3,4]);


 // tostring method 
 val = (5).toString();
 val =(true).toString();


 val = Number(5);

 val = Number(true);
 val = Number(false);

val = Number("hello");
//NAN means not a number 
val = Number([1,2,3,4]);
//parseInt method
val = parseInt(100.30);//Prints only integers 
val = parseFloat(100.303);// prints decimals also 
val = parseFloat(3);



//output
//console.log(val); 
//console.log(typeof val);
//console.log(val.length); only useful for strings 

//console.log(val.toFixed()); is used to specify decimels and is only used for numbers
//console.log(val.toFixed());


const val1 = String(5);
const val2 = 6;
const sum = Number(val1+val2);
console.log(sum);
console.log(typeof sum);
 




