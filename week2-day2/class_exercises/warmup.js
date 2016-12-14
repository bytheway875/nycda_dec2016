// Warm Up Week 2, Day 2

// Let’s declare some variables:
//   - Define variable named pet, which is a *string* of the name of one of your pets (or the pet you wish you had)

var pet = "Hudson";

//   - Define variable named toes, which is an *integer* of the number of toes you have

var toes = 10;

//   - Define a variable named tired, which is a *boolean* value of whether you feel tired or not right now!

var tired = false;

// Let’s create some arrays:
//   - Define a variable named fruits, which is an *array* of three of your favorite fruits

var fruits = ["banana", "orange", "apple"];

//   - Define a variable named friends, which is a *multi-dimensional array*, including the names of three friends and their favorite color (make it up!)

var friends = [["Kelly", "blue"], [], []];

// Let’s create some objects:
//   - Define a variable named person. Set it equal to an *object* with the attributes name, toeCount, and hairColor.

var person = { name: "Shannon", toeCount: toes, hairColor: 'red', "home address": "1511 Faro Dr" };
//   - Log to the console:
//       - The person’s name
//       - The person’s toeCount
//       - The person’s hairColor
console.log(person['home address'])
console.log(person.name);
console.log(person['toeCount']);
console.log(person.hairColor);

// Let’s create some functions:
//   - Define a function named squared. This should take one argument and return the *square* of the passed in value.

function squared(a){
  var answer = a * a;
  console.log(answer);
  return answer;
}

function squared(a){
  return a * a;
}

//   - Define a function named area. This should take two arguments (length and width) and multiply them to give you the area of a rectangle.

function area(length, width){
  return length * width;
}

squared(2);
area(10, 5);


// EXTENSION:
// We didn't learn these things in class. Use your new bff Google to see if you can figure out how to do these things in JS.
//   - Reverse your fruits array.
console.log(fruits.reverse());
//   - Figure out how to generate a random number using javascript.

// Remember that the return value of prompt is a STRING.
var selectedDoor = prompt("Which door do you choose? 1, 2 or 3?");

// 1 = "1" //error
// 1 === "1" //false
// 1 == "1" //true

if(selectedDoor == 1){
  alert("You've won a car");
}else if(selectedDoor == 2){
  alert("You've won a horse");
}else if(selectedDoor == 3){
  alert("You've won a spaceship");
} else {
  alert("You win nothing because you can't follow directions!");
}
