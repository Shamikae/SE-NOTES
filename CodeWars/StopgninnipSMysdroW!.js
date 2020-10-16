//Stop gninnipS My sdroW!:
    //Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

        // Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
                 //  spinWords( "This is a test") => returns "This is a test" 
                 //  spinWords( "This is another test" )=> returns "This is rehtona test"

                 // Split words 
                 // Turn string words into an array
                 // Loop through array checking for 5 characters
                 // Reverse if >= 5 characters 
                 // Join back into a sentence 

                 function spinWords(sentence){
                     let sentenceArray = sentence.split(' ');
                     let result = '';
                     sentenceArray.map((str, i) => {
                         if (str.length >= 5) {
                             sentenceArray[i] = str.split('').reverse().join('');
                         }else {
                             sentenceArray [i] = str;
                         }
                    result = sentenceArray.join(' ');
                     });
                 return result;
                 }
//or 

function spinWords(x){
    return x.split(' ').map((x) => x.length >= 5 ? x.split('').reverse().join('') : x).join(' ')
   }