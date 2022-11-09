// Assignment code here
// return a random integer ranging from min to max
function randomInt(min, max) {
  // if 'max' is not defined, assume we want range from 0 to min
  if (!max) {
    max = min
    min = 0
  }

  // interpolate random value
  let rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
  }
  
  // return a random entry from a list
  function getRandomIndex(list) {
  return list[randomInt(list.length)]
  }
  
  // prompt the user for a specified value, and a given condition function
  function promptUserForInputType(inputType, message, isValidCondition) {
  let userInput = window.prompt(message)
  let isValidType
  
  let inputObject = {
    // value:...
    // isValidType:...
    // isValidCondition:...
    canceled: userInput === null
  }
  
  // validate input for number type
  if (inputType === "number") {
    userInput = parseInt(userInput)
    isValidType = !isNaN(userInput)
  }
  
  // assign object fields
  inputObject.isValidType = isValidType
  inputObject.value = userInput
  inputObject.isValidCondition = isValidType && isValidCondition(userInput)
  
  return inputObject

}

// create a new passwordOption object
function newPasswordOption(name, generator) {
  return {
    name: name,
    generate: generator,
  }
  }



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

     // list of existing password options
     let passwordOptions = [
      newPasswordOption("uppercase letters", getRandomLetterUpper),
      newPasswordOption("lowercase letters", getRandomLetterLower),
      newPasswordOption("symbols", getRandomSymbol),
      newPasswordOption("numbers", getRandomNumber),
    ]

    // an empty array where the user's selected options will be stored
    let selectedPasswordOptions = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);