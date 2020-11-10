// Your order, please:
    // Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

    // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

    // If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

    // Examples
    // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
    // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
    // ""  -->  ""

    //Split words 
    //
    function order(words){
        // seperate each word in a string
        let arr = words.split(' ')

        //Loop through sperate words
        for(let i = 0; i <= arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                console.log(`i:${i}`,`j:${j}`)


                //of (arr[j].indexOf(i) > -1)
                //console.log(arr[j])
            }
            //target number in each word
            // add them back
        }
        return arr[j];
      }
      console.log(order("is2 Thi1s T4est 3a"))
    //or

    function order (word){
        let arr = word.split(' ');
        let result = [];
        
        for (let i = 0; i < arr.length; i++){
         result[arr[i].match(/[1-9]/g) - 1] = arr[i]
        };
        return result.join(' ')
       }
       console.log(order("is2 Thi1s T4est 3a"))