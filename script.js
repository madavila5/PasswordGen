// Assignment Code - original
var generateBtn = document.querySelector("#generate");

//variable characters
var upper = ["A","B","C","D","E","F","G",'H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ["a", "b","c","d","e","f","g","h","i","j",'k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ["!","@","#","$","%","&","*","?",">","<","+"];
var number = ["0","1","2","3","4","5","6","7","8","9"]

//const
// const upper = "ABCDEFGHUJKLMNOPQRSTUVWXYZ"
// const lower = "abcdefghijklmnopqrstuvwxyz"
// const special = "!@#$%&*?><+"
// const number = "0123456789"

//function prompt length of characters
var characters;
function characterLength(){
  character = prompt ("Choose between 8-128 characters for your Password", "8");
  if (character < 8 || character >128 ) {
    alert ("You MUST pick an amount between 8 and 128"); return;
  } else {
    prompts();
  }
};
// prompts all in one function
var upCase;
var loCase;
var spCase;
var nuCase;
function prompts(){
  upCase = confirm("Should it include an UPPERCASE");
  loCase = confirm("Should it include an LOWERCASE");
  spCase = confirm("Should it include an SPECIAL CHARACTER");
  nuCase = confirm("Should it include an NUMBER");
 if (upcase !== true && loCase !== true && spCase !== true && nuCase !== true){
   alert ("Must choose at least one option"); upCase();
 } else {
   writePassword()
 }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", characterLength);
