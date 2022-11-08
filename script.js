// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Must continue to acquire user input until it Vlidated or if they leave
while (true) {
  passwordLengthResult = promptUserForInputType(
    "number", 
    "Enter a password length (between " + minLength + " and " + maxLength + " characters)", 
    function(inputNumber) {
      return inputNumber >= minLength && inputNumber <= maxLength
    }
  )

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);