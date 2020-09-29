// Higher order functions
        // .filter()
        // .reduce()      
        // .map()
  
// filter questions
let arrOfNums = [-100, -50, -21, -3, -1, -2, 0, 1, 2, 3, 21, 50, 100, 999];
// Level 0
    // given an array of numbers filter out any that are larger than 10
    
    let largerThan10 = arrOfNums.filter(function(n){return n > 10});
    // console.log(largerThan10);

// Level 1
    // given an array of numbers filter out any that are divisible by 3
    let noThrees = arrOfNums.filter(function(n){return n % 3 !== 0});
    // console.log(noThrees);

    // given an array of nubers filter out any that are even
    let noEvens = arrOfNums.filter(function(n){return n % 2 !== 0});
    // console.log(noEvens);

// Level 2
    // given an array of strings, filter out any that are longer than 4 chars
    let arrOfStrs = ['this', 'is', 'a', 'complicated', 'topic'];
    let fourOrLess = arrOfStrs.filter(function(str){return str.length <= 4});
    // console.log(fourOrLess);

    // given an array of arrays, filter out any that are shorter than 10 elements
    let arrOfArrs = [[1,2,3,4], [0,1,2,3,4,5], ['a','b','c','d','e','f'], ['g']];
    let lessThan10Ele = arrOfArrs.filter(function(ele){return ele.length <= 10});
    // console.log(lessThan10Ele);
// Level 3
    // given an array of objects, filter out any that dont have a key called 'firstName'
    let arrOfObjs = [{test:'test'}, {name:'test'}, {test:'test'}, {firstName:'Jess'}];
    let noFistName = arrOfObjs.filter(function(obj){return !obj['firstName']});
    // console.log(noFistName);
// reduce questions 
// level 0:
    // given an array of numbers add them all together
    let sum = arrOfNums.reduce(function(a,n){return a + n})
    // console.log(sum);
// level 1:
    // given an array of numbers, multiply them all together
    let mult = arrOfNums.reduce(function(a,n){return a * n})
    // console.log(mult);
// level 2:
    // given an array of strings, concatiante them together 
    let concat = arrOfStrs.reduce(function(a,str){return a + str})
    // console.log(concat);
// level 3: 
    // given an array of arrays make them all into one array 
    arrOfArrs = [[1,2,3,4], [0,1,2,3,4,5], ['a','b','c','d','e','f'], ['g']]; // [1,2,3,4,0,1,2,3,4,5,'a','b','c','d','e','f','g']
    let oneArr = arrOfArrs.reduce(function(a, c){return a + ',' + c }).split(',');
    // console.log(oneArr);
// level 5:
    // given an array of strings, remove any vowels and concatenate them together 
    let concatNoVowels = arrOfStrs.reduce(function(a, str){return a + str.replace(/[AEIOU]/ig, '')}, '');
    console.log(concatNoVowels);

// map questions
// level 0:
    // given an array of numbers, return a new array with all numbers multiplied by 2
    let double = arrOfNums.map(function(num){return num*2});
    // console.log(double);

// level 1:
    // given an array of numbers, return a new array with all numbers increased by 1
    let plus1 = arrOfNums.map(function(num){return num+1});
    // console.log(plus1);
// level 2:
    // given an array of strings, return a new array with all strings as capitals
    let caps = arrOfStrs.map(function(str){return str.toUpperCase()});
    // console.log(caps);