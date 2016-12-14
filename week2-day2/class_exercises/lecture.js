// we need an array of numbers
// we need to reverse the array
// if/else statement that checks to see
// if the number is gt or lt 10
// aletrt/log the result
//this should be inside of a for loop

//Globally Scoped
// var numbers = [0, 20, 56, 678];
//
//
// numbers.reverse();
//
// for(var i = 0; i < numbers.length; i++){
//   if(numbers[i] < 10 ){
//     console.log("Less is more");
//   } else {
//     console.log("More is better");
//   }
// }
//
// function numberTest(something){
//   //Globally Scoped - wont work because we define a locally scoped var of the same name
//   console.log("Inside function: global", numbers)
//   //Locally Scoped
//   var numbers = "0,1,2,3";
//   console.log("Inside function: local", numbers)
// }
//
// numberTest("something");
// console.log("Outside function", numbers);
// // > undefined


// Globally Scoped Variable
var z = 20;

console.log("Globally scoped z", z);

function withArg(z){
  // argument is called z. Now I cannot access globally scoped variable z within here.
  console.log("z is an argument - whatever i pass it", z)
}
withArg(10);

function logGlobalScope(){
  // Accesses globally scoped var
  console.log("log global scope", z);
  // 20
}

//
logGlobalScope();
function createLocalScope(){
  var z = 3;
  console.log("locally scoped z", z)
  // 3
}
createLocalScope();

//
function overrideGlobalScope(){
  z = 25;
  console.log("overrideGlobalScope", z)
}

console.log("Global Scope before invoking override", z);
// now that I've invoked overrideGlobalScope(), the global z variable is now 25
overrideGlobalScope();

console.log("Global Scope after overriding", z);
// > 25

function changeHeader(){
  var textInputValue = document.getElementById('text-input').value;
  // > Week 2, Day 2

  var header = document.getElementById('header')
  // <h1 id="header"> Week 2, Day 2 </h1>
  header.innerText = textInputValue;
  // <h1 id="header"> "This is the new header text";
}
