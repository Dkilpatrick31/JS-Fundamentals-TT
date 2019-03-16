var adjective = prompt("Please type in an adjective");
var noun = prompt("Please type in a nount");
var verb = prompt("I need a verb, then im done.");
alert("All done, Would yo like to see your sentence?");
var sentence = "<h1> There once was a " + adjective;
sentence += " programmer who wanted to use Javascript to " + verb;
sentence += " the " + noun + "</h2>";
document.write(sentence);
