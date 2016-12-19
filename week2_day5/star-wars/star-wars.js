// global variable starWarsName keeps track of the changing name as index changes
var starWarsName = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

// param inputSelector(string): the selector for the target input.
// param numberOfLetters(integer): the number of letters you need to take for the starWarsName.
// param startingIndex(integer): the index to add the letters to in the starWarsName array.
function calculateFromSelector(inputSelector, numberOfLetters, startingIndex){
  playThemeSong() || playLightsaber();

  var inputValue = $(inputSelector).val();
  changeStarWarsName(inputValue, numberOfLetters, startingIndex);
  console.log(starWarsName);
  updateDOM();
}

// Prepares the starWarsName for the UI by slicing it into first and last name,
// then changes the name in the DOM.
function updateDOM(){
  var firstName = starWarsName.slice(0,5);
  var lastName = starWarsName.slice(5)
  $('.star-wars-name').text(firstName.join("") + " " + lastName.join(""));
}

// Three letters from the users last name are entered into the array at index 0
// to make up the first three letters of the first name.
function calculateFromLastName(){
  calculateFromSelector('#last-name', 3, 0);

}
// 2 letters from the users first name are entered into the array at index 3
// to make up the last two letters of the first name.
function calculateFromFirstName(){
  calculateFromSelector('#first-name', 2, 3);
}

// 2 letters from the mother's name are entered into the array at index 5 to make up the first 2 letters of the first name.
function calculateFromMom(){
  calculateFromSelector('#moms-name', 2, 5);
}

// 3 letters from the place of birth are entered into the array at index 7 to make up the last three letters of the last name.
function calculateFromBirth(){
  calculateFromSelector('#birth-place', 3, 7);
}

/*
  param word: A word that you'd like to split into individual letters
  param howMany: the number of elements (letters) you'd like to return
*/
function makeLettersArray(word, howMany){
  // split the provided word into an array
  var wordArray = word.split("");
  // slice the array starting at index zero, grabbing
  // the number of letters provided in howMany.
  return wordArray.slice(0, howMany);
}

/*
  param lettersArray(array): The letters to apply to the star wars name, cut into an array.
  param numberOfLettersExpected(integer): The number of letters from the input that need to go into the name. We use the expected number of letters even if the array is shorter so that we can replace empty letters with underscores while the user is backspacing.
  param startingIndex(integer): The index at which we want to start assigning letters into the starWarsName.
*/

function changeStarWarsName(inputValue, numberOfLettersExpected, startingIndex){
  var letters = makeLettersArray(inputValue, numberOfLettersExpected);
  var starWarsIndex = startingIndex;

  for(i = 0; i < numberOfLettersExpected; i++){
    starWarsName[starWarsIndex] = letters[i] || "_";
    starWarsIndex++;
  }
}

// Choose a random lightsaber sound from the 4 lightsaber sounds and play it.
function playLightsaber(){
  var random = Math.floor(Math.random() * 3) + 1
  $(`#lightsaber${random}`)[0].play();
}

// The logic of this method cues the theme song to start
// if there are no "_" in the name array. Otherwise, it will look
function playThemeSong(){
  if(starWarsName.indexOf('_') == -1){
    $("#theme")[0].play();
  } else{
    stopSong();
    return false;
  }
}

// Stop the theme song and set the currentTime to 0
// so that when it restarts, it will restart from the
// beginning.
// (html does not have a "stop" for audio methods).
function stopSong(){
  $("#theme")[0].pause();
  $("#theme")[0].currentTime = 0;
}

// Once the page loads, focus on the first name input.
$(document).ready(function(){
  $('#first-name').focus();
})
