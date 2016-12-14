//After lunch activity!

Math.floor(Math.random() * 20) + 1;


// 1. Create a variable that generates a random number between one and 10.



// 2. Create a varible that holds the result of the prompt of asking someone what number
//they want to guess.


// - wrong (the guess does NOT equal the random number)
// - right (the guess DOES equal the random number)

function guessingGame(){

  var randomNumber = Math.floor(Math.random() * 100) + 1;
  var guess = prompt("Guess a number between 1 and 100!");

  console.log(guess);
  if(guess == null){
    return
  }

  while(randomNumber != guess){
    if(randomNumber > guess){
      alert("Your guess is too low!");
    } else {
      alert("Your guess is too high!");
    }
    guess = prompt("Guess a number between 1 and 100!");
  }

  return alert('You are right');
}


// guessingGame();

// for(i=1; i<=3; i++){
//
//   if(randomNumber == guess){
//     alert("You're right!");
//     return
//   } else {
//     alert("Eher.");
//   }
// }
