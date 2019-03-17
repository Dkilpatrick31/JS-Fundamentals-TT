var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("Guess a random number between 1 and 6.");
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt("Sorry but the number that I'm thinking of is more than " + guess + ". Guess again!");
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt("Sorry but the number I'm thinking of is less than " + guess + ". Guess again!");
} if (parseInt(guessLess) === randomNumber) {
  correctGuess = true;
}
if (correctGuess) {
  document.write("<p>You guess the number!</p>");
} else {
  document.write("<p>Sorry the number was " + randomNumber + ".</p>" );
}
