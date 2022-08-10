let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('september 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // time passes since jan1 1970!!

birthday.setMonth(2);
birthday.getDate(12);
birthday.setFullYear(1985);

console.log(birthday);
