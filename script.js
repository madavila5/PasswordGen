// Assignment Code - original
var generateBtn = document.querySelector("#generate");

// variable characters
var upper = ["A","B","C","D","E","F","G",'H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ["a", "b","c","d","e","f","g","h","i","j",'k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ["!","@","#","$","%","&","*","?",">","<","+"];
var number = ["0","1","2","3","4","5","6","7","8","9"]

//function prompt length of characters
var character;
function charLength(){
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
  upCase = confirm("Should it include an upCase");
  loCase = confirm("Should it include an loCase");
  spCase = confirm("Should it include an SPECIAL CHARACTER");
  nuCase = confirm("Should it include an NUMBER");
 if (upCase !== true && loCase !== true && spCase !== true && nuCase !== true){
   alert ("Must choose at least one option"); 
 } else {
   password()
 }
};
//Password function 
function password() {
  var numCase = upCase + loCase + spCase + nuCase;
  var divider = character / numCase;
  var generated = [];
//individual randomization for each prompOpt
  if (upCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * upper.length);
      var randomValue = upper[randomIndex];
      generated.push(randomValue);
    }
  }
  if (loCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * lower.length);
      var randomValue = lower[randomIndex];
      generated.push(randomValue);
    }
  }
  if (spCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * special.length);
      var randomValue = special[randomIndex];
      generated.push(randomValue);
    }
  }
  if (nuCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * number.length);
      var randomValue = number[randomIndex];
      generated.push(randomValue);
    }
  }
 }

//original
function writePassword(generated) {
  var passwordText = document.getElementById("password");
  passwordText.innerText = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", charLength);
