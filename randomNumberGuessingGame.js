// // The Random Number Guess Game Generates a number between 1 and 6 and gives a player two attempts to guess the number.
//
//
// // assume the player did guess correctly
// var correctGuess = false;
//
// //  generate a random number from 1 to 6.
// var randomNumber = Math.floor(Math.random() * 6) + 1;
//
// // get/prompt the player to guess a number between 1 and 6.
// var guess = prompt("Guess a random number between 1 and 6.");
//
// // if the number guessed is correct, then it's true.
// if (parseInt(guess) === randomNumber) {
//   correctGuess = true;
//
// // if the guessed number is less than the randomNumber. Prompt the player to guess higher.
// } else if (parseInt(guess) < randomNumber) {
//   var guessMore = prompt("Sorry but the number that I'm thinking of is more than " + guess + ". Guess again!");
//   if (parseInt(guessMore) === randomNumber) {
//     correctGuess = true;
//   }
//
// // if the guessed number is more than the randomNumber. Prompt the player to guess lower.
// } else if (parseInt(guess) > randomNumber) {
//   var guessLess = prompt("Sorry but the number I'm thinking of is less than " + guess + ". Guess again!");
// } if (parseInt(guessLess) === randomNumber) {
//   correctGuess = true;
// }
//
// // if the guessed number is the same as the randomNumber, then let the player know they won.
// if (correctGuess) {
//   document.write("<p>You guess the number!</p>");
//
// // if the player never guessed the right number. Let the player know what the randomNumber was.
// } else {
//   document.write("<p>Sorry the number was " + randomNumber + ".</p>" );
// }
