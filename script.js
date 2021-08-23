// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// asked for character types to include in the password - lowercase, uppercase, numeric, and/or special characters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", ":", "$", "%", "^", "&", "*", "(", ")", "_", "+", "\\", "-", "=", "[", "]", "{", "}", ";", "|", ".", "<", ">", "/", "?"]

var userChoiceObject = undefined
var lengthChoice = undefined

function windowAlert() {
  
  // choose a length of at least 8 characters and no more than 128 characters
  lengthChoice = parseInt(window.prompt("choose a length of at least 8 characters and no more than 128 characters"));
  if (Number.isNaN(lengthChoice)) {
    alert("Has to be a number!")
    while (Number.isNaN(lengthChoice)) {
      lengthChoice = parseInt(window.prompt("choose a length of at least 8 characters and no more than 128 characters"));
    }
  }

  if (lengthChoice < 8 || lengthChoice > 128) {
    alert("Has to be between 8-128");
    while (lengthChoice < 8 || lengthChoice > 128) {
      lengthChoice = parseInt(window.prompt("choose a length of at least 8 characters and no more than 128 characters"));
    }
  }

  var upperCaseChoice = confirm("Do you want upper case?")
  var lowerCaseChoice = confirm("Do you want lower case?")
  var numericChoice = confirm("Do you want numbers?")
  var specialCharactersChoice = confirm("Do you want special characters?")

  if (upperCaseChoice === false && lowerCaseChoice === false && numericChoice === false && specialCharactersChoice === false) {
    alert("Select at least one choice!")
    while (upperCaseChoice === false && lowerCaseChoice === false && numericChoice === false && specialCharactersChoice === false) {
      alert("Select at least one choice!")
      upperCaseChoice = confirm("Do you want upper case?")
      lowerCaseChoice = confirm("Do you want lower case?")
      numericChoice = confirm("Do you want numbers?")
      specialCharactersChoice = confirm("Do you want special characters?")
    }
  }
  
    userChoiceObject = {
    upperCase: upperCaseChoice,
    lowerCase: lowerCaseChoice,
    numeric: numericChoice,
    specialCharacters: specialCharactersChoice,
  }

  return userChoiceObject;
}

// click the button to generate a password
function generatePassword(){
  var userOptions = windowAlert();
  //create a function that randomzies("receives") anything we pass into it.
  function random(characters) {
    var arrayLength = characters.length 
    var num = Math.floor(Math.random() * arrayLength) + 1;
    return characters[num]
  }

  //create an array for your result
var result = [];
  //create an array for your possible characters
var possibleCharacters = [];
  //conditional that checks if the user choices came back true and thencalls the random function and pushes the random character into the array of possible characters
  if (userChoiceObject["upperCase"] === true) {
    possibleCharacters.push(...upperCase)
  }

  if (userChoiceObject["lowerCase"] === true) {
    possibleCharacters.push(...lowerCase)
  }

  if (userChoiceObject["specialCharacters"] === true) {
    possibleCharacters.push(...specialCharacters)
  }

  if (userChoiceObject["numeric"] === true) {
    possibleCharacters.push(...numeric)
  }
  //loop through the possible characters array and randomize that array and push it to the result array
  for (var i = 0; i < lengthChoice; i++) {
    result.push(random(possibleCharacters))
  }
  //return the result array and transform it into a string
  return result.join('')
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// create an array named "array" and convert it to a string 



// for (var i = 0; i < 10; i++) {