var boxes = document.querySelectorAll('.box')
var randomIndex = Math.floor(Math.random() * boxes.length);
var randomBox = boxes[randomIndex];

randomBox.style.backgroundColor = "red";
console.log(boxes[randomIndex]);


function changeToRed(){
  // Select all elements with class of box!
  var boxes = document.querySelectorAll('.box')
  // Get a random number between 0 and the length of the boxes array.
  // This random number will act as the index we want to retreive.
  var randomIndex = Math.floor(Math.random() * boxes.length);

  // We go back into the boxes array to grab the boxes ELEMENT using the
  // randomIndex variable.
  var randomBox = boxes[randomIndex];

  randomBox.style.backgroundColor = "red";
}
