var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds per day.");

var yearsAlive = 28;
var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear;
secondsAlive *= yearsAlive;
document.write("I've been a live for " + secondsAlive + " seconds!");
