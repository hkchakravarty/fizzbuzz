function isPalindrome(string) {
  string = string.toLowerCase()
  var charactersArr = string.split("")
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("")

  var lettersArr = []
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char)
  })

  return lettersArr.join("") === lettersArr.reverse().join("")
}
isPalindrome("Madam, I'm Adam")

// function isPallindrome(string) {
//   string = string.toLowerCase()
//   var charatersArr = string.split("")
//   var validCharactersArr = "abcdefghijklmnopqrstuvwxyz".split("")

//   var lettersArr = []

//   charatersArr.forEach(char => {
//     if (validCharactersArr.indexOf(char) > -1) lettersArr.push(char)
//   })

//   if (lettersArr.join() === lettersArr.reverse().join()) return true
//   else return false
// }

// isPallindrome("race car")
