// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  var password = prompt("PLease enter password, between  8 to 128 characters.");
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (password < 8) {
    alert("Password must be greater than 8 characters.");
  }

  if (password > 128) {
    alert("Password must be less than 128 characters.");
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
var password = prompt("Congratulation your password is now ...")
  // THEN the password is either displayed in an alert or written to the page

  return "Password Acquired";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
