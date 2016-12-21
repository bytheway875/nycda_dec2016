function Car(make, model){
  this.make = make;
  this.model = model;
  this.drive = function(distance = 1) {
    return "You drove " + distance + " miles.";
  }
}

var myCar = new Car("Mercury", "Sable");
myCar.make
// > Mercury

myCar.drive
// function(distance){...}
myCar.drive();
// "You drove 1 miles."
myCar.drive(2);
// "You drove 2 miles."

myCar.go = function(){
  // some code that stops the car
}

var yourCar = new Car("Toyota", "Landcruiser");

// yourCar.go()
// Wouldn't work on yourCar because its an instance method only defined on myCar instance.

Car.prototype.stop = function(){

  return "The " + this.make + " has stopped!";
}

myCar.stop();
// "The Mercury has stopped!";

yourCar.stop();
// YourCar.stop();

function Truck(make, model, towingCapacity){
  this.towingCapacity = towingCapacity;
  Car.apply(this, arguments);
}
Truck.prototype = Object.create(Car.prototype);


var myTruck = new Truck("Ford", "150", 6000);

Car.prototype.start = function() {
  return "Started."
}



function Family(mother, father, childrenArray) {
  this.mother = mother;
  this.father = father;
  this.children = childrenArray;
  this.addChild = function(name, age, grade){
    var child = new Child(name, age, grade);
    this.children.push(child);
    return child;
  }
}

Family.prototype.getParents = function() {
  return [this.mother, this.father];
};

function Person(name, age){
  this.name = name;
  this.age = age;
}

function Adult(name, age, occupation){
  this.occupation = occupation;
  Person.apply(this, arguments);
}
Adult.prototype = Object.create(Person.prototype);

function Child(name, age, grade){
  this.grade = grade;
  Person.apply(this, arguments);
}
Child.prototype = Object.create(Person.prototype);

var mother = new Adult("Kate", 35, "Software Developer");
var father = new Adult("Larry", 36, "Firefighter");

var child1 = new Child("Susan", 12, 4);
var child2 = new Child("Monica", 18, 12);

var theSmiths = new Family(mother, father, [child1, child2]);

theSmiths.parents
//
