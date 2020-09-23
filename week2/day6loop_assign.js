// Q1: Create a loop that greets us 5 times!
//      - The console should look similar to the following:
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
// function greet(){
//     for(i = 0; i < 5; i++ )
//     console.log('-Hi!')

//     return  'Bye!';
// }
// console.log(greet())
// Q2: Create a loop which logs the index. Try and use a template literal to produce the result.
//      - The console should look similar to the following:
//          - Loop Count: 1
//          - Loop Count: 2
//          - Loop Count: 3
//          - Etc.. based on the max value parameter
// function loopLog(){
    
//     for(i = 1; i < 4; i++ )
//     console.log(`Loop Count: ${i}`)

//     return  'End';
// }
// console.log(loopLog())

// Q3: Loop over the following array and console.log the current index value
//      - ['Zeus', 'Hades', 'Hermies', 'Poseidon']
//      - The console should look similar to the following:
//          -   Zeus
//          -   Hades
//          -   Hermies
//          -   Poseidon
// var arr = ['Zeus', 'Hades', 'Hermies', 'Poseidon']
// function gods(){
//     for (i = 0; i < arr.length; i++){
//     console.log('- '+ arr[i] +' ' + i )
//     }

//     return arr;
// }
// console.log(gods());
// Q4: Loop over an array of strings and return a new array of single letter strings
    // Input:    ['As', 'Soon', 'As', 'Possible']
    // Output: ['A','S','A','P']
// var longText = ['As', 'Soon', 'As', 'Possible']
// function single (){
//     var shortText = [];
//     for (i = 0; i < longText.length; i++){
       
//         shortText.push(longText[i][0])
//     }
//    return shortText;
// }
// console.log(single());
// Q5: Loop over an array and log to the CLI an array where each word has its second letter capitalized
    // - Input:    ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    // - Output: ['APple', 'BAnana', 'ORange', 'PEach', 'STrawberry', 'PLum'];
// var fruits = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];

// function cap(){
//     var capLetter = [];
//     for (i = 0; i < fruits.length; i++){
        
//         var secLetter = fruits[i][1].toUpperCase();
//         capLetter.push(secLetter)

//     }

//     return capLetter;
// }
// console.log(cap());
// Q6: Loop over an array of names and log the first and last initial of each person
    // - Input:    ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
    // - Output: ['SE', 'RL', 'SPL', 'WPL' ]

var students = ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]

function initials(arr){
    var newArr = [];
    for (i = 0; i < arr.length; i++){
        var ele = arr[i];
        var first = ele[i].toUpperCase();
        //var spaceIndex = students.indexOf(' ');
        var capitalized = first;
        newArr.push(capitalized);

        return newArr;
    }
}
console.log(initials(students))