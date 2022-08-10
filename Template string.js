// Template literals 
const name ='John';
const age = 219;
const job = "Web Developer";
const city = 'Miami';
let html;
 

// without template strings 
html = ' <ul><li>Name: ' + name + ' </li><li>age: ' + age + ' </li><li>Job: ' + job + ' </li><li>city: '+ city + ' </li></ul>' ;



// template string 

function hello(){
  return "hello";
}

html = `
  <u1>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "over 30"  : "under 30"}</li>                            
  </ul>
`;
// age>30 ?"over 30 ": "under 30 " is basically an if statement "?" represents then ":" represents else 
// ul represents an parent element called unordered list where <li> represents item in that list 
//` can be found next to the number 1 key

document.body.innerHTML = html;