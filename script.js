// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for a random integer
function ranInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var ran = Math.random()
  return Math.floor(min*(1 - ran) + ran*max)
}


// Function for a random item from a generated list
function ranItem(list) {
  return list[ranInt(list.length)]
}

//"Brain" of application starts here
function generatePassword() {

  //Arrays containing each of the character types
  var numberElements = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var upperElements = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowerElements = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var symbolElements = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "-"]

  //Variables that return true or false based on the users password character preference 
  var confirmNumbers = window.confirm("Do you want numbers in your password?")
  var confirmUpper = window.confirm("Do you want uppercase letters in your password?")
  var confirmLower = window.confirm("Do you want lowercase letters in your password?")
  var confirmSymbols = window.confirm("Do you want symbols in your password?")

  //Length is more expansive due to requiring a number value instead of the string returned by window.prompt
  var userInput = window.prompt("How many characters do you want in your password?")

  //parseInt converts a valid string input to a number data type
  var Length = parseInt(userInput)

  //Function to ensure user input was a valid number, quits function if not valid
  if (isNaN(Length)) {
    window.alert("Please enter a valid number")
    return
  }

  //Function to ensure password length falls between 8-128 characters, quits function if not
  if (Length < 8 || Length > 128) {
    window.alert("Please enter a number between 8 and 128")
    return
  }

  //Empty List made to contain the confirmed character type lists
  var passwordElements = []

  //Functions to "push" each character type array into the "passwordElements" list if the confirm variable returns true
  if (confirmNumbers) {
    passwordElements.push(numberElements)
  }

  if (confirmUpper) {
    passwordElements.push(upperElements)
  }

  if (confirmLower) {
    passwordElements.push(lowerElements)
  }

  if (confirmSymbols) {
    passwordElements.push(symbolElements)
  }

  //Safety function for when all character types are declined but a valid length is selected, quits function if none are selected
  if (passwordElements.length === 0) {
    window.alert("Please select at least one character type.")
    return
  }

  //Variable for the final generated string
  var finalPassword = ""

  //for loop to iterate through each selected list and choose a random element out of each one of them until the entered length is exceeded
  for (var i = 0; i < Length; i++) {
    var ranElementList = ranItem(passwordElements)
    var ranChar = ranItem(ranElementList)
    finalPassword += ranChar
  }
  //Quits a successful function and returns the final generated password to the original writePassword function which prints it onto the screen
  return finalPassword

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);