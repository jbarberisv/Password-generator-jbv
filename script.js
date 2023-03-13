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

// make prompts & check answers
function checkPrompt(question) {
  var notInRange = true;
  while (notInRange === true) {
    var response =  window.prompt(question); 
    response = response.toUpperCase();
    if (response != "YES" && response != "NO") {
      window.alert("Enter YES or NO.");
      notInRange = true;
    } else {
      return response;
      
    }
  }
}

// number randomizer with min - max
function numberInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// questions
function generatePassword() {
  var passLength = length();
  var lowerCase = checkPrompt("Would you like for your password to have lowercase characters?");
  var upperCase = checkPrompt("Would you like for your password to have uppercase characters?");
  var numbers = checkPrompt("Would you like for your password to have numbers?");
  var specialCharacters= checkPrompt("Would you like for your password to have special charcters?");
  var password = '';

//random ASCII queries dpeending on the digit
  for (var num = 0; num < passLength; num++) {
    if (lowerCase === 'YES') {
      var randomNum = numberInterval(97, 122);
      var randomChar = String.fromCharCode(randomNum);
      password = password + randomChar;
    }
    if (upperCase === 'YES') {
      var randomNum = numberInterval(65, 90);
      var randomChar = String.fromCharCode(randomNum);
      password = password + randomChar;
    }
    if (numbers === 'YES') {
      var randomNum = numberInterval(48, 57);
      var randomChar = String.fromCharCode(randomNum);
      password = password + randomChar;
      
    }
    if (specialCharacters === 'YES') {
      var randomNum = numberInterval(33, 47);
      var randomChar = String.fromCharCode(randomNum);
      password = password + randomChar;
    }
  }
  return password
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
