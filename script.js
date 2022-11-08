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

  if (passwordLengthResult.canceled) return // exited prompt
    
      // if input type is invalid (not a number)
      if (!passwordLengthResult.isValidType) {
        window.alert("Please enter a valid number")
    
      // if input type is valid but does not meet the condition (password length range)
      } else if (!passwordLengthResult.isValidCondition) {
        window.alert("Password length must be between " + minLength + " and " + maxLength + " characters")
    
      // else no other invalidations occur, break the prompt loop
      } else {
        break
      }
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);