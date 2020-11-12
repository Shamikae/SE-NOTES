// Find the missing letter:
    //Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

    // You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
    // The array will always contain letters in only one case.

    // Example:

    // ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

    // ["a","b","c","d","f"] -> "e"
    // ["O","Q","R","S"] -> "P"

function findMissingLetter(array) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let j = alphabet.indexOf(array[0].toLowerCase());
    for (let i = 0; i < array.length; i++) {
        if (!array.includes(alphabet[j]) && !array.includes(alphabet[j].toUpperCase())) {
            return array[0] === array[0].toLowerCase() ? alphabet[j] : alphabet[j].toUpperCase();
        }

        j++;
    }

    return "";
}