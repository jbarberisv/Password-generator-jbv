// Ask for length
function length () {
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

  return passwordLength;
}


function checkPrompt(question) {
  var notInRange = true;
  while (notInRange === true) {
    var response =  window.prompt(question);
    if (response != "YES" && response != "NO") {
      window.alert("Enter YES or NO.");
      notInRange = true;
    } else {
      return response;
      
    }
  }
}

function numberInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function generatePassword() {

  var passLength = length();
  var lowerCase = checkPrompt("Would you like for your password to have lowercase characters?");
  var upperCase = checkPrompt("Would you like for your password to have uppercase characters?");
  var numbers = checkPrompt("Would you like for your password to have numbers?");
  var specialCharacters= checkPrompt("Would you like for your password to have special charcters?");
  console.log('lowerCase1', lowerCase);
  for (var num = 0; num < passLength; num++) {
    console.log('lowerCase', lowerCase);

    if (lowerCase === 'YES') {
      // encotrar un caracter entre el 97 y el 122
      // random 

      var randomNum = numberInterval(97, 122);
      var randomChar = String.fromCharCode(randomNum);
      console.log (randomChar)

    }
    
  }

  
  // Generate a random number between 0 and 255

  // Convert the random number to its corresponding ASCII character
  // var randomChar = String.fromCharCode(randomNum);


  
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
