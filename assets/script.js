// Assignment Code
var generateBtn = document.querySelector("#generate");

// Innerworking for the actual password randomizer
function generatePassword() {

// Password charcters that will be used inside of password based on prompts
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
var numbers = "123456789"
var specialchar ="!@#$%^&*()"
var multiSelect = "";
var randomKey = "";

// Start prompts for user to select password criteria
var keyLength = prompt(
  "Please select password lenghth (8-128 characters long)."
);
if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
  alert("Password must be between 8 and 128 charcters long. Please try again.")
  return;
} else {
  // "OK" or "cancel prompts for the remainder of variables "
  var promptUpper = confirm("Do you wish for password to include Uppercase Letters");
  var promptLower = confirm("Do you wish for password to include Lowercase Letters");
  var promptNumbers = confirm("Do you wish for password to include Numbers");
  var promptSpecialchar = confirm("Do you wish for password to include Special Characters");
}
// Checks for prompt input to see what will be used for password
// these check variable are true and if they are it will add above variables into the multiselect variable
if (promptUpper) {multiSelect += uppercaseAlphabet;}
if (promptLower) {multiSelect += lowercaseAlphabet;}
if (promptNumbers) {multiSelect += numbers;}
if (promptSpecialchar) {multiSelect += specialchar;}

// Creates the loop to use items within the variable multiSelect and randomizes to create the variable randomKey
for (i= 0; i < keyLength; i++) {
  randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
}
return(randomKey);
}

// Write password to the #password input
function writePassword(randomKey) {
  var password = generatePassword(randomKey);
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
