// var visitor = prompt("What you're name?");
// var message = 'Hello ' + visitor + ". Did you know that combining strings is called, concatenation. " + visitor + ", follow the white rabbit.";
// document.write(message);


var visitor = prompt("What you're name?");
var message = 'Hello ' + visitor + ". Did you know that combining strings is called, concatenation. ";
message = message + visitor + ", follow the white rabbit.";
document.write(message);



var visitor = prompt("What you're name?");
var message = 'Hello ' + visitor + ". Did you know that combining strings is called, concatenation. ";
message += visitor + ", follow the white rabbit.";
document.write(message);
