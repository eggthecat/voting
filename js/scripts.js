$(document).ready(function() {
  var age = parseInt(prompt("Provide your age."));

  if (age>=19) {
    $('#voting').show();
  } else if (age === 18) {
    alert("Now don't go crazy!");
    $('#voting').show();
  } else {
    $('#underage').show();
  }
});
