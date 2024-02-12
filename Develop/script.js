// Assignment Code
var generateBtn = document.querySelector("#generate");

var option = ["YES", "NO"]

//Prompt Commands
var criteria =  function() {
  //prompts user input on special characters in password
  var specialchar = window.prompt("Include Special Characters? YES, or NO");

  //prompts user input on including numbers in password
  var numbers = window.prompt("Include Numbers? Enter YES or NO");

  if (!specialchar) {
    return;
  }
  
  if (!numbers) {
    return;
  }
}

 criteria();

  specialchar = specialchar.toUpperCase();




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
