// Assignment Code - original
var generateBtn = document.querySelector("#generate");

//var
var upper = ["A","B","C","D","E","F","G",'H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ["a", "b","c","d","e","f","g","h","i","j",'k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ["!","@","#","$","%","&","*","?",">","<","+"];
var number = ["0","1","2","3","4","5","6","7","8","9"]

//const
const upper = "ABCDEFGHUJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const special = "!@#$%&*?><+"
const number = "0123456789"

//function prompt length of characters
function characterLength(){

};

//function prompt include uppercase
function upCase(){

}

//function prompt include lowercase
function loCase(){

}

//function promp include special
function spCase(){

}

//function prompt include number
function nuCase(){
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
