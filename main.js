var questions = 3;
var questionsLeft = ' [' + questions + ' questions left.]';
var adjective = prompt("Please type in an adjective" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left.]';
var noun = prompt("Please type in a noun" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left.]';
var verb = prompt("I need a verb, then im done." + questionsLeft);
alert("All done, Would yo like to see your sentence?");
var sentence = "<h1> There once was a " + adjective;
sentence += " programmer who wanted to use Javascript to " + verb;
sentence += " the " + noun + "</h2>";
document.write(sentence);
