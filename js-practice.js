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


//////////////////////////////////////////////////////////////// S P A C E R   D I V //////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Immediately invoked function expression
var outerVar = 20;
var res = (function() {
  document.write("<p>This is a Immediately Invoked Function Expression (IIFE)</p>");
  var innerVar = 30;
  return (outerVar + innerVar);
})();
document.write(`Result from IIFE &rarr; ${res}`);


//////////////////////////////////////////////////////////////// S P A C E R   D I V //////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Function declaration using Expression
var varFunc;
varFunc = function() {
  document.write("<p>This is from varFunc()</p>");
}

//Call varFunc
varFunc();


//////////////////////////////////////////////////////////////// S P A C E R   D I V //////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Recursive Function
//Define linked list data structure
var linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

//Convert it to array using recursive Function
let tArr = [];
const arrayFromList = function(list) {
  tArr.push(list.value);
  if(list.next) {
    return arrayFromList(list.next);
  } else {
    return tArr;
  }
}
//arrayFromList(linkedList);
document.write(`<p>${arrayFromList(linkedList)}</p>`);


//////////////////////////////////////////////////////////////// S P A C E R   D I V //////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Class in JS
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    //Always use this to refer to properties of the class inside methods
    document.write(`<p>The car is a ${this.year} ${this.make} - ${this.model}</p>`);
  }
}

let aHondaCityObject = new Car("Honda", "City", 2005);
aHondaCityObject.displayInfo();

//Another way to define class on the go
let justAnotherCarObject = new class {
  displayInfo()  {
    document.write(`<p>This is just a car. I have no idea what are its make, model and year!</p>`);
  }
};
justAnotherCarObject.displayInfo();
console.log(justAnotherCarObject.toString());


//////////////////////////////////////////////////////////////// S P A C E R   D I V //////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Getter, setter and inheritence
class HondaCar extends Car {
  constructor(make, model, year, carid) {
    super(make, model, year);
    this.hondaCarId = carid;
  }

  get carId() {
    if(!this.hondaCarId) {
      return (this.year.substring(2) + this.make.substring(0,3) + this.model.substring(0,3)).toUpperCase();
    } else {
      return this.hondaCarId.toUpperCase();
    }
  }

  set carId(value) {
    this.hondaCarId = value;
  }

  displayInfo() {
    super.displayInfo();
    document.write(`<p>The car ID of this Honda car is: ${this.carId}</p>`);
  }
}

let hCity = new HondaCar("Honda", "City", "2005");
let anotherHCity = new HondaCar("Honda", "City", "2010", "IUFEUJF663UH");
hCity.displayInfo();
anotherHCity.displayInfo();
anotherHCity.carId = "HHDJAKAKAKD848592";
anotherHCity.displayInfo();
console.log(`Is anotherHCity an instance of HondaCar? [${anotherHCity instanceof HondaCar}]`);


//////////////////////////////////////////////////////////////// S P A C E R   D I V //////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Try catch error

//Define binary expression
let binary = {
  zero: 0,
  one: 1,
  getBool(value) {
    if(value === null || value === undefined){
      throw new Error(`[value not set: ${value}] | [ERROR] [Binary value should either be zero (0) or one (1)]`);
    } else if(!value in [0,1])  {
      throw new Error(`[value set to ${value}] | [ERROR] [Binary value should either be zero (0) or one (1)]`);
    } else {
      return Boolean(value);
    }
  }
};

let boolValueTest_one = true, boolValueTest_two = false, boolValueTest_three = null, boolValueTest_four, boolValueTest_five = "1", boolValueTest_six = undefined;
try {
  document.write(`<p>Showing binary zero &rarr; ${binary.zero}</p>`);
} catch(error) {
  console.error(`ERROR: ${error}`);
}
try {
  document.write(`<p>Showing binary one &rarr; ${binary.one}</p>`);
} catch(error) {
  console.error(`ERROR: ${error}`);
}
try {
  document.write(`<p>boolValueTest_one &rarr; ${binary.getBool(boolValueTest_one)}</p>`);
} catch(error) {
  console.error(`ERROR [from boolValueTest_one]: ${error}`);
}
try {
  document.write(`<p>boolValueTest_two &rarr; ${binary.getBool(boolValueTest_two)}</p>`);
} catch(error) {
  console.error(`ERROR [from boolValueTest_two]: ${error}`);
}
try {
  document.write(`<p>boolValueTest_three &rarr; ${binary.getBool(boolValueTest_three)}</p>`);
} catch(error) {
  console.error(`ERROR [from boolValueTest_three]: ${error}`);
}
try {
  document.write(`<p>boolValueTest_four &rarr; ${binary.getBool(boolValueTest_four)}</p>`);
} catch(error) {
  console.error(`ERROR [from boolValueTest_four]: ${error}`);
}
try {
  document.write(`<p>boolValueTest_five &rarr; ${binary.getBool(boolValueTest_five)}</p>`);
} catch(error) {
  console.error(`ERROR [from boolValueTest_five]: ${error}`);
}
try {
  document.write(`<p>boolValueTest_six &rarr; ${binary.getBool(boolValueTest_six)}</p>`);
} catch(error) {
  console.error(`ERROR [from boolValueTest_six]: ${error} | [ERROR CALL STACK] ${error.stack}`);
}


//////////////////////////////////////////////////////////////// S P A C E R   D I V //////////////////////////////////////////////////////////////
document.writeln(`<div class="mx-auto" style="height:${spacerHeight}px;width:60%;"><hr style="text-align:center;background-color:orange;"></div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Custom error

//Define the custom error class
class NotANumberError extends Error {}
//Define the array that will contain the values
//against which the check will be done
let guessArray = [12,432,57,46,867,21];
//function for the guessing game
function guessNumberGame(number) {
  if(isNaN(number)) {
    throw new NotANumberError(`${number} is not a number`);
  } else if(guessArray.includes(number)) {
    return true;
  } else {
    return false;
  }
}

try {
  document.write(`<p>Is 2 in the array? &rarr; ${guessNumberGame(2)}</p>`);
} catch(e) {
  if(e instanceof NotANumberError) {
    console.error(`NOT A NUMBER ERROR [from check for 2]: ${e}`);
  } else {
    console.error(`OTHER ERROR [from check for 2]: ${e}`);
  }
}
try {
  document.write(`<p>Is "ARKO" in the array? &rarr; ${guessNumberGame("ARKO")}</p>`);
} catch(e) {
  if(e instanceof NotANumberError) {
    console.error(`NOT A NUMBER ERROR [from check for "ARKO"]: ${e}`);
  } else {
    console.error(`OTHER ERROR [from check for "ARKO"]: ${e}`);
  }
}
try {
  document.write(`<p>Is 432 in the array? &rarr; ${guessNumberGame(432)}</p>`);
} catch(e) {
  if(e instanceof NotANumberError) {
    console.error(`NOT A NUMBER ERROR [from check for 432]: ${e}`);
  } else {
    console.error(`OTHER ERROR [from check for 432]: ${e}`);
  }
}
try {
  document.write(`<p>Is "57AB" in the array? &rarr; ${guessNumberGame("57AB")}</p>`);
} catch(e) {
  if(e instanceof NotANumberError) {
    console.error(`NOT A NUMBER ERROR [from check for "57AB"]: ${e}`);
  } else {
    console.error(`OTHER ERROR [from check for "57AB"]: ${e}`);
  }
}
try {
  document.write(`<p>Is 0/0 in the array? &rarr; ${guessNumberGame(0/0)}</p>`);
} catch(e) {
  if(e instanceof NotANumberError) {
    console.error(`NOT A NUMBER ERROR [from check for 0/0]: ${e}`);
  } else {
    console.error(`OTHER ERROR [from check for 0/0]: ${e}`);
  }
}
try {
  document111.write111(`<p>Is 0/0 in the array? &rarr; ${guessNumberGame(33)}</p>`);
} catch(e) {
  if(e instanceof NotANumberError) {
    console.error(`NOT A NUMBER ERROR [from check for 33]: ${e}`);
  } else {
    console.error(`OTHER ERROR [from check for 33]: ${e}`);
  }
}
