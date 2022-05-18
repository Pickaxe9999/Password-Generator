// Assignment code here
var generatePassword = function(){

  //prompt user for the password length
  var passwordLength = window.prompt("Please enter the desired length for your password between 8 and 128 Characters.");
  if(Number(passwordLength) === NaN){
    window.alert("Please enter a valid number!");
    writePassword();
  }else if(Number(passwordLength)%1 > 0){
    window.alert("Please enter a whole number!");
    writePassword();
  }

  var ifCapital = window.confirm("Would you like to include capital letters? OK = yes | cancel = no");
  var ifNum = window.confirm("Would you also like to include numbers? OK = yes | cancel = no");
  var ifSpecial = window.confirm("Would you like to include special characters? EX- &,*,%,#, etc. OK = yes | cancel = no");

  var length = Number(passwordLength);
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var password = "";

  for(i = 0; i < length; i++){
    password += letters.charAt(Math.floor(Math.random()*26));//concatanate a random char between index 0-25 to the password string
  }

  console.log(password);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
