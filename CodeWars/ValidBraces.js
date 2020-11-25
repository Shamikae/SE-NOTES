// Valid Braces:
    // Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

    // This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

    // All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

    // What is considered Valid?
    // A string of braces is considered valid if all braces are matched with the correct brace.

    // Examples:
    //         "(){}[]"   =>  True
    //         "([{}])"   =>  True
    //         "(}"       =>  False
    //         "[(])"     =>  False
    //         "[({})](]" =>  False

    // function validBraces(braces) {
    //     let arr = []
      
    //     for (let brace of braces) {
    //       if (')]}'.includes(brace)) {
    //         if (matchingBraces(arr.pop(), brace)) {
    //           continue
    //         }
    //         return false
    //       }
      
    //       arr.push(brace)
    //     }
      
    //     return !arr.length
    //   }
      
    //   function matchingBraces(left, right) {
    //     return ['()', '[]', '{}'].some(([l, r]) => l == left && r == right)
    //   }

    //Or:

    function validBraces(braces){
        if('}])'.includes(braces[0])){return false}
        for(let i = 0; i < braces.length; i++){
            let currentBrace = braces[i]
            let nextBrace = braces[i+1]
            if ('([{'.includes(currentBrace) && !'([{'.includes(nextBrace)){
                if(currentBrace == '{' && nextBrace !== '}' ||
                currentBrace == '(' && nextBrace !== ')' ||
                currentBrace == '[' && nextBrace !== ']' 
                ){
                    return false
                }
            }
        } console.log(braces)
        return true;
      }