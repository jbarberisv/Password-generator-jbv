// Assignment code here


function generatePassword() {
  var notInRange = true;

  while (notInRange === true) {
    var passwordLength =  window.prompt("How many characters would you like your password to have? (Between 8-128 characters).");
    if (passwordLength > 128 || passwordLength < 8) {
      window.alert("Number out of range.");
      notInRange = true;
    } else {
      break
    }
  }


  var passwordLowercase =  window.prompt("Would you like for your password to have lowercase characters?.")
  var passwordUppercase =  window.prompt("Would you like for your password to have uppercase characters?.")
  var passwordNumber =  window.prompt("Would you like for your password to have numbers?")
  var passwordSpecial =  window.prompt("Would you like for your password to have special charcters?.")

  
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
