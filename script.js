var length;
var number;
var specialCharacter;
var upperCase;
var lowerCase;
var selection;
var lettersUp;

const characters = ["number", "letters", "character"];

number = "0123456789";
letters = "abcdefghijklmnopqrstuvwxyz";
lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
character = "!@#$%^&*)()";

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  length = prompt("Enter a password length between 8-128 characters)");
  if (length < 8 || length > 128) {
    length = prompt("New password must be from 8-128 characters");
  } else {
    lowerCase = confirm("Include lowercase letters?");
    upperCase = confirm("Include uppercase letters?");
    number = confirm("Include numbers in your new password?");
    specialCharacter = confirm(
      "Include special characters in your new password?"
    );
  }

  // All character types chosen:
  if (number && specialCharacter && upperCase && lowerCase) {
    selection = character.concat(number, letters, lettersUp);
  }

  // Three types selected
  else if (number && specialCharacter && upperCase) {
    selection = character.concat(number, lettersUp);
  } else if (specialCharacter && upperCase && lowerCase) {
    selection = character.concat(letters, lettersUp);
  } else if (upperCase && lowerCase && number) {
    selection = lettersUp.concat(letters, number);
  } else if (lowerCase && number && specialCharacter) {
    selection = letters.concat(number, character);
  }

  //Two types selected
  else if (specialCharacter && number) {
    selection = character.concat(number);
  } else if (number && upperCase) {
    selection = number.concat(lettersUp);
  } else if (upperCase && lowerCase) {
    selection = lettersUp.concat(letters);
  } else if (lowerCase && number) {
    selection = letters.concat(number);
  } else if (lowerCase && specialCharacter) {
    selection = letters.concat(character);
  } else if (specialCharacter && upperCase) {
    selection = character.concat(lettersUp);
  }

  //One type
  else if (specialCharacter) {
    selection = character;
  } else if (number) {
    selection = number;
  } else if (lowerCase) {
    selection = letters;
  } else if (upperCase) {
    selection = lettersUp;
  }
  return selection;
}

for (var i = 0; i < length; i++) {
  retVal += characters[Math.floor(Math.random() * characters.length)];
}

generateBtn.addEventListener("click", writePassword);
