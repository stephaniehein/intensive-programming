var name = 'Stephanie';

document.getElementById("name").innerHTML = name;

var greeting = 'Hello';


document.getElementsByClassName("greeting").innerHTML = greeting;
console.log(document.getElementsByClassName("greeting")[0]);



var result = greeting+ ' ' +name;

console.log ('result',result);


var array = new Array ('alpacas','meerkats','quokkas') 

console.log ('i like', array)

var	age = 26

var number2 = 2

var array2 = new Array();
array2['name'] = name;
array2['nationality'] = 'german';
array2['age'] = age;
array2['isHappy'] = false;

console.log ('about', array2);

var modulo = age % number2

console.log ('result', modulo)

if (modulo === 0) {
	console.log ('Your age is even')
}