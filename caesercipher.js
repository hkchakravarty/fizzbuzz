function caeserCipher(str, num) {
  num = num % 26
  var lowerCaseString = str.toLowerCase()
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  var newString = ""

  for (let i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i]
    if (currentLetter === " ") {
      newString += currentLetter
      continue
    }
    var currentIndex = alphabet.indexOf(currentLetter)
    var newIndex = currentIndex + num
    if (newIndex > 25) newIndex = newIndex - 26
    if (newIndex < 0) newIndex = newIndex + 26
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    } else newString += alphabet[newIndex]
  }
  return newString
}

caeserCipher("Harish Manish", 2)
