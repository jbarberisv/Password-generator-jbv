// Assignment code here
function generatePassword() {
  var passwordLength =  window.prompt("How many characters would you like your password to have? (Between 8-128 characters).")
  var passwordLength =  window.prompt("Ho many characters would you like your password to have? (Between 8-128 characters).")
  var passwordLength =  window.prompt("How many characters would you like your password to have? (Between 8-128 characters).")
  var passwordLength =  window.prompt("How many characters would you like your password to have? (Between 8-128 characters).")
  var passwordLength =  window.prompt("How many characters would you like your password to have? (Between 8-128 characters).")
  var passwordLength =  window.prompt("How many characters would you like your password to have? (Between 8-128 characters).")
  
  return passwordLength; 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordField = document.querySelector("#password");

  passwordField.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
