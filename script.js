// Variables for generate button and password text and their coresponding selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//Object to connect random character functions to corresponding variables chosen by user
const randomFunc = {
  lowerCase : getRandomLower,
  upperCase : getRandomUpper,
  pwNumbers : getRandomNumber,
  specChar : getRandomSymbol
}

function generatePassword() {
  //Prompts and confirms for password length and character selection
  const passwordLength = parseInt(prompt("Select a password length between 8-128 characters:"));
  const lowerCase = confirm("Would you like to include lowercase letters in your password?");
  const upperCase = confirm("Would you like to include uppercase letters in your password?");
  const specChar = confirm("Would you like to include special characters in your password?");
  const pwNumbers = confirm("Would you like to include numbers in your password?");
  
  
  //Alert if length chosen is not in the proper range
  if (passwordLength <  8 || passwordLength > 128) {
    alert("Please enter a length between 8-128.")
  }
  //Variable for password text
  let passwordText = '';
  //Variable for users chosen characters
  const typesCount = lowerCase + upperCase + specChar + pwNumbers;

  //Alert if no characters are chosen
  if (typesCount === 0) {
    alert("Please select at least one character typer to include in your password.");
  }

  //Array to filter out character selections that aren't chosen by user
  const typesArr = [{lowerCase}, {upperCase}, {specChar}, {pwNumbers}].filter(
    item => Object.values(item)[0]
  );
  
  //Loop to run random character functions per chosen password length
  for(let i = 0; i < passwordLength; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);
      passwordText += randomFunc[funcName]();
    })
  }
  
  //Insert generated password into text area
  document.getElementById("password").value = passwordText;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//Functions for random character selection
function getRandomLower() { 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() { 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() { 
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() { 
  const symbols = " !'*+,-./:;<=>?@[^_`{|}~ "; 
  return symbols [Math.floor(Math.random() * symbols.length)];
}


