// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random()*(max-min) + min)
}

function getRandomItem(list) {
  return list[randomInt (0, list.length - 1)]
}

function generatePassword() {
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  var userInput = window.prompt("How long do you want your password to be?");
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("That is not a number! Please Change Input");
    return;
  }

  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (passwordLength < 8 || passwordLength > 120) {
    alert("Password Length Must Be Between 8 And 128 Characters");
  }

  // WHEN asked for character types to include in the password
  var userWantsNumbers = confirm(
    "Would you like to include Numbers in your password?"
  );
  var userWantsSymbols = confirm(
    "Would you like to include Special Characters in your password?"
  );
  var userWantsLowercase = confirm(
    "Would you like to include Upper Case Letters in your password?"
  );
  var userWantsUppercase = confirm(
    "Would you like to include Lower Case Letters in your password?"
  );
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaseList = [];

  var optionsList = [];

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toLocaleUpperCase();
  }

  if (userWantsNumbers === true) {
    optionsList.push(numberList);
  }

  if (userWantsSymbols === true) {
    optionsList.push(symbolList);
  }

  if (userWantsLowercase === true) {
    optionsList.push(lowercaseList);
  }

  if (userWantsUppercase === true) {
    optionsList.push(uppercaseList);
  }

  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered

  var generatePassword = ""

  for ( var i=0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsList)
    var randomChar = getRandomItem(randomList)
    console.log(randomChar)
  }
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
