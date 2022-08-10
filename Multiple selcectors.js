// // Multiple selector 
// //getElementsByclassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello world';

const listItems = document.querySelector('ul').getElementsByClassName('collection-items');
console.log(listItems);

// Document.getelementsbytagname
let  lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'yellow';
lis[1].textContent = 'Hello';


//Convert HTML collection into an array
lis = Array.from(lis);
lis.reverse();


lis.forEach(function(li,index){
   console.log(li.className)
   li.textContent = `${index} : 'Hello'`;
});
lis.reverse();

console.log(lis);

//document.querySelectorAll from this selector we wil get a nodelist on which we can perform array functions without converting it 

const items = document.querySelectorAll('li');
//il.collection li.collection-item has same effect as li in the above selector !!!!
items.forEach(function(item,index){
   item.textContent = `${index} : Hello`;
 });

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


liOdd.forEach(function(li ,index){
  li.style.background = '#ccc';
});

for(let i = 0;i<liEven.length;i++){
  liEven[i].style.background = '#f4f4f4'
}
console.log(items); 

