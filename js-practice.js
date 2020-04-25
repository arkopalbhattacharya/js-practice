document.writeln("<h1>Hello World!</h1>");
var firstName = "Arkopal";
var lastName = "Bhattacharya";
document.writeln(`<h2>Welcome to this practice page, ${firstName} ${lastName}</h2>`);

var numberA = 10;
document.writeln(`<h3>numberA = ${numberA}</h3>`);

var numberB = 20;
document.writeln(`<h3>numberB = ${numberB}</h3>`);

var stringA = "10";
document.writeln(`<h3>stringA = "${stringA}"</h3>`);

var stringB = "20";
document.writeln(`<h3>stringB = "${stringB}"</h3>`);

//Function to add two objects
function add(val1, val2) {
  return val1 + val2;
}

//Function to add two numbers
function addNumbers(num1, num2) {
  return Number(num1) + Number(num2);
}

document.writeln(`<p>numberA + numberB = ${add(numberA, numberB)}</p>`);
document.writeln(`<p>stringA + stringB = ${add(stringA, stringB)}</p>`);
document.writeln(`<p>numberA + stringB = ${add(numberA, stringB)}</p>`);

//Array Practice
let myArray = [10,20,30,40,50,60];

//Define spacer div height
let spacerHeight = 20;

//////////////////////////////////////////////////////////////// S P A C E R   D I V /////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Using for loop
document.writeln("<div class=\"mx-auto\" style=\"width:20%\">"); //Table formatting using Bootstrap CSS
document.writeln("<h2>FOR LOOP</h2>");
document.writeln("<table class=\"table table-sm table-striped table-hover\"><caption>Iteration of array myArray</caption><thead><tr><th class=\"bg-info\">INDEX</th><th class=\"bg-info\">VALUE</th></tr></thead>");
document.writeln("<tbody");
for(var i = 0; i < myArray.length; i++) {
  document.writeln(`<tr><td>${i}</td><td>${myArray[i]}</td></tr>`);
};
document.writeln("</tbody></table></div>");


///////////////////////////////////////////////////////////////// S P A C E R   D I V /////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Using forEach loop
document.writeln("<div class=\"mx-auto\" style=\"width:20%\">");
document.writeln("<h2>FOREACH LOOP</h2>");
document.writeln("<table class=\"table table-sm table-striped table-hover\"><caption>Iteration of array myArray</caption><thead><tr><th class=\"bg-info\">INDEX</th><th class=\"bg-info\">VALUE</th></tr></thead>");
document.writeln("<tbody");
myArray.forEach((item, i) => {
  document.writeln(`<tr><td>${i}</td><td>${item}</td></tr>`);
});
document.writeln("</tbody></table></div>");

//Add all the numbers in myArray using spread (...) operator
//Function to add all params
function addAllNumbers(...numbers) {
  let res = 0;
  numbers.forEach((item, i) => {
    res += Number(item);
  });
  return res;
};


//////////////////////////////////////////////////////////////// S P A C E R   D I V /////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.writeln(`<div><h2>SPREAD OPERATOR</h2>
  <h3>Sum of all the elements of myArray using spread (...) operator &rarr; ${addAllNumbers(...myArray)}
  </div>`);


//////////////////////////////////////////////////////////////// S P A C E R   D I V //////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Array example
let myAnotherArray = [10,20,30,40];
//For every element of the above array, the corresponding element of the below array
//will be multiplied by 2
let myMappedArray = myAnotherArray.map( (value) => (value * 2) );
document.write("Original Array &rarr; ");
myAnotherArray.forEach( (item) => document.writeln(`${item} `) );
document.write("<br />Mapped Array &rarr; ");
myMappedArray.forEach((item) => document.write(`${item} `) );


//////////////////////////////////////////////////////////////// S P A C E R   D I V //////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Basic class definition and usage of Object.assign() to copy
//over member data from object1 to object2
class aClass {
  constructor() {
    this.varA = "ABC";
    this.varB = "DEF";
  }

  getMemberData = () => (`<p>A is ${this.varA}, and B is ${this.varB}.</p>`);
}

let aObjA = new aClass();
let aObjB = new aClass();
aObjA.varA = "Arko";
aObjA.varB = "Bhat";
document.write(`<p>aObjA &rarr; A is ${aObjA.varA}, and B is ${aObjA.varB}.</p>`);
Object.assign(aObjB, aObjA);
aObjB.varA = "Khaokhaokhao";
document.write(`<p>aObjB &rarr; A is ${aObjB.varA}, and B is ${aObjB.varB}.</p>`);

//Another way to copy over object data is to use the destructing/spread operator (...)

//Copy over all member data from aObjA to aObjC and then update
//the value of varB in aObjC
let aObjC = { ...aObjA, varB: "Paopaopao"};
document.write(`<p>aObjC &rarr; A is ${aObjC.varA}, and B is ${aObjC.varB}.</p>`);
