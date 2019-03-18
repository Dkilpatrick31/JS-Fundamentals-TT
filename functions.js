// function alertRandom() {
//   var randomNumber = Math.floor(Math.random() * 6) + 1;
//   alert(randomNumber);
// }
// alertRandom();

function isEmailEmpty() {
  var field = document.getElementById('email');
  if (field.value === '') {
    return true;
  } else {
    return false;
  }
}

var fieldTest = isEmailEmpty();
if (field === true) {
  alert('please provide your email address');
}
