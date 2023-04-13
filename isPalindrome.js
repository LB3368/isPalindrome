/**
 * Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false
Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true
 */
// Write your code below
function isPalindrome(word) {
    word = word.toLowerCase().replace(/\s/g, "")
    let i = word.length - 1
    for (let x = 0; x < (word.length) / 2; x++) {   //properly handle even-length words.
        if (word[x] !== word[i]) {
            return false
        }
        i--
    }
   
    return true
}
console.log(isPalindrome('hello'))
console.log(isPalindrome('stress'))
console.log(isPalindrome('Racecar'))
console.log(isPalindrome('Was it a car or a cat I saw'))