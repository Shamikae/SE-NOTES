// Higher order functions
        // .filter()
        // .reduce()      
        // .map()
  
    

// filter questions
// Level 0
    // given an array of numbers filter out any that are larger than 10
    // let numbers = [30, 5, 10, 9];
    // largerNums = numbers.filter(function(n){return n > 10})
    // console.log(largerNums)
// Level 1
    // given an array of numbers filter out any that are divisible by 3
    // let numbers = [30, 5, 10, 9];
    // divideThree = numbers.filter(function(n){return n %3})
    // console.log(divideThree)

    // given an array of numbers filter out any that are even
    // let numbers = [30, 5, 10, 9];
    // evenNums = numbers.filter(function(n){return n % 2})
    // console.log(evenNums)

// Level 2
    // given an array of strings, filter out any that are longer than 4 chars
    // let fruit = ['mango', 'kiwi', 'apple', 'pear'];
    // longFruit = fruit.filter(function(currentElement){
    //     return n.length < 5
    // })
    // console.log(longFruit)

    // given an array of arrays, filter out any that are shorter than 10 elements
    let fruit = [['mango'], ['kiwi', 'apple'], [1,2,3,4,5,6]]
    longFruit = fruit.filter(function(currentElement){
        return n.length < 5
    })
    console.log(longFruit)

// Level 3
    // given an array of objects, filter out any that dont have a key called 'firstName'

// reduce questions 
// level 0:
    // given an array of numbers add them all together

// level 1:
    // given an array of numbers, multiply them all together

// level 2:
    // given an array of strings, concatiante them together 

// level 3: 
    // given an array of arrays make them all into one array 

// level 5:
    // given an array of strings, remove any vowels and concatenate them toegher 


// map questions
// level 0:
    // given an array of numbers, return a new array with all numbers multiplied by 2

// level 1:
    // given an array of numbers, return a new array with all numbers increased by 1

// level 2:
    // given an array of strings, return a new array with all strings as capitals