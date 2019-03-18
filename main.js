// ask 5 questions - DONE
// keep track of the # of questions answered correctly
// let the player know what questions they got correctly.
// rank the players
//   gold - all correctly
//   silver - 3 to 4 correctly
//   bronze - 1 to 2 correctly
//   no crown - 0 correct

var correct = 0;
var question1 = prompt("What color is the sky?");
if (question1.toUpperCase() === 'BlUE'); {
  correct += 1;
}
var question2 = prompt("What is my Name?");
if (question2.toUpperCase() === "DANE"); {
  correct += 1;
}
var question3 = prompt("Do you wish you had a job right now?");
if (question3.toUpperCase() === 'YES') {
  correct += 1;
}
var question4 = prompt("What is your mothers name?");
if (question4.toUpperCase() === "TERESA") {
  correct += 1;
}
var question5 = prompt("What programming language are you currently learning?");
if (question5.toUpperCase() === "JAVASCRIPT") {
  correct += 1;
}

// output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

// output rank
if (correct === 5) {
  document.write("<h2>You got all questions correct and earned the top prize: A Gold Medal!</h2>");
} else if (correct >= 3) {
  document.write("<h2>You got " + correct + " out of 5 questions correct and earned the a Silver Medal!</h2>");
} else if (correct >= 1) {
  document.write("<h2>You got " + correct + " out of 5 questions correct and earned a Bronze Medals!</h2>");
} else {
  document.write("<h2>You didn't get any questions correct and for that you earned nothing.</h2>");
}
