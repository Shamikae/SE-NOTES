// level 0
// Create a function which contains a for loop 
// the for loop should contain the following code: console.log('this is a loop');
// After the loop return 'finished looping'
function intro(param) {
    for (var i = 0; i < 3; i++) {
    
        console.log('this is a loop');
        
    }   
    return 'finished looping'
}
console.log(intro());
function test(){


    return'';
}
// level 1
    // Q1.1
        // Create a function that iterates over all elements in an array and logs them to the console
var colors = ['Blue', 'Red', 'Green']
function loopColors(arr){
    
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i])

    }

    return 'End Loop'; //not necessary when iterating used for example as to not get undefined
}
console.log(colors);
    // Q1.2
        // Create a function that iterates over all elements in an array of numbers and multiplies them by 3
// level 2
    // Q2.1:
        // Create a function that iterates over ever letter in a word.
        // If this word contains a specific letter log that letter's index
        // Note: this imitates indexOf(), dont use indexOf in this solution.
// level 3
    // Q3.1
        // Create a function that iterates over each element in an array of strings.
        // It capitalizes the first and last letters and returns a new array with first and last letters capitalized
// level 4
    // 
// level 5
    // Q5.1:
        // Create a function which reverses the order of a word.
        // If you managed without using a loop 🎉 congratulations 🎉
        // Now try to do it using a loop
    // Q5.2:
        // Create a function which takes in an array of words and reports which ones have the letter e
