//WINDOW METHODS / OBJECTS / PROPERTIES

console.log(123);

//alert
alert('Hello World');

//prompt
 const input = prompt();
 alert(input);

 // Confirm 
 if(confirm('Are you sure?')){
   console.log('YES');
 }else {
   console.log('NO');
}

let val1;
// outter height and width
val1 = window.outerHeight;
val1 = window.outerWidth;
console.log(val1);

let val2;
//Inner height and width 
val2 = window.innerHeight;
val2 = window.innerWidth;
console.log(val2);

//Scroll points 
val = window.scrollY;
val = window.scrollX;


// Location object
val = window.location;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// redirect 
window.location.href = 'http://google.com';

//Reload
window.loaction.reload();

//HISTORY OBJECTS

window.history.go(-2);
val = window.history.length;

//Navigator object 
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;




console.log(val);
 
