// Object Literal Syntax
var student = { name: "Shannon", grade: 110, favoriteFood: "Pooridge" };
var student1 = { nane: "Mandy", grade: 120, favoriteFood: "Chips"};

student.name
// > "Shannon"
student['name']
// > "Shannon"

student.grade
// 110
student['grade']
// 110

student.favoriteFood;
// "Pooridge"

[student, student1]
student.name
// Shannon
student.name
// undefined

// Constructor Function

function Student(name, grade, favoriteFood){
  this.name = name;
  this.grade = grade;
  this.favoriteFood = favoriteFood;
}


var jimmy = new Student("Jimmy", 125, "Fries");
var guy = new Student("Guy", 125, "soup");


jimmy.name
jimmy.grade
jimmy.favoriteFood

function Animal(species, color){
  this.species = species;
  this.color = color;
  // Any object types that inherit from Animal will NOT be able to overwrite the breathe function on its prototype. It will refer to this Animal method from the constructor!
  this.breathe = function(){
    return "I am breathing because I am living!";
  }

}

// Add a new method to the animal prototype so that all instances of Animal can access the run method.
Animal.prototype.run = function(){
  // string interpolation. Requires backticks.
  return `${this.species} is running.`
  // string concatenation
  // return this.species + " is running."
}

// instantiate a new instance of Animal.
var hairlessCheetah = new Animal("cheetah", "orangeish and brown");

// We are explicitly setting a new attribute for hair to our
// hairless cheetah. At this point, all other animals who are
// created would have a value of undefined for cheetah.
hairlessCheetah.hair = false;

// We can add a method to any instance, but remember: it is applicable ONLY to that instance.
// Right now, only our hairlessCheetah can eat.
hairlessCheetah.eat = function() {
  return `${this.species} is eating.`
}

var mouse = new Animal("mouse", "gray");
// mouse.eat();
// > eat() is not a function
// only our hairlessCheetah can eat!

// Now, we add an eat function to the animal prototype. All animal // objects will respond to the eat method now!
Animal.prototype.eat = function(){
  return `${this.species} is eating.`
}

// We decide that it would be useful for all of our animals to have // a default value for hair. Our cheetah is an anomoly, so let's
// set hair to be true by default.
Animal.prototype.hair = true;

var standardCheetah = new Animal("cheetah", "brown and orangish");

function Fish(species, color, finCount){
  this.fins = true;
  this.finCount = finCount;
  Animal.apply(this, arguments);
  this.breathe = function(){
    return "I'm a fish so I breathe with gills.";
  }
}

Fish.prototype = Object.create(Animal.prototype);

Fish.prototype.run = function(){
  return "Try swim() instead. I'm not much of a runner.";
}

/* This won't work! You can't overwrite a method that was written  on the parent's constructor function on the child's prototype.
*/
// Fish.prototype.breathe = function(){
//   return "Special fish breathing."
// }


// Fish.prototype = Animal.prototype;
/* ^^ Don't do this!!
  This sets the Fish prototype property to the Animal prototype property. This creates a two way relationship between the prototypes, which would mean that we can call all methods on the FISH prototype on the ANIMAL prototype as well.
*/

Fish.prototype.swim = function(){
  return "I am a fish so I swim";
}


var myFirstFish = new Fish("Goldfish", "gold", 4);

// Remember: methods written on the parent's constructor MUST be overwritten on the child's constructor.

// Methods written on the parent's PROTOTYPE should also be overwritten on the CHILD'S PROTOTYPE.
