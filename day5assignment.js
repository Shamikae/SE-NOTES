//Problem 1
// Using Math.random(), console.log 3 random numbers from 5 to 15

//Math.floor(Math.random() * (max - min + 1) + min)
console.log(Math.floor(Math.random() * (15 - 5 + 1) + 5))

// Problem 2
// Define a variable name and assign your name to it
// Create a function that returns your name
var name = "Shamika"
function myName(name) {
    return name;
}
console.log(myName(name));

// Problem 3
// Create a function that accepts 2 arguments, both of which are numbers, and returns the sum of those two numbers
function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(5, 10));

// Problem 4

// Create a function that returns the type of any argument that is being called in the function
// example
// type(400) // => 'number'
// type('hi') // => 'string'
function number(param) {
    return param;
}
console.log(number(400));

function string(str) {
    return str;
}
console.log(string('Hi'));

// Problem 5
// Hint: Ensure you are modifying the parameter and not the original variable inside the function, this will make your life easier with this question

// var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];

// Using the array above, create a funciton that returns the 4th element in the array.
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
function picker(fruits) {
    return fruits;
}
console.log(picker(fruits[3]));

// Create a function that returns only the last element in the fruits array
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
function lastPick(fruits) {
    return fruits.pop();
}
console.log(lastPick(fruits));

// Create a function that returns [peach', 'lemon', 'plum', 'grape']
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
function remove(fruits) {
    return fruits.slice(2, -1);
}
console.log(remove(fruits));
// Create a function that adds another furit to the end of the array and returns the new array
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
function addPick(fruits) {
    
    newFruit = fruits.push('mango');
    return newFruit;
}
console.log(addPick(fruits));
// Create a funciton that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon'
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
function joinFruit(fruits) {
    return fruits.join(' and ');
}
console.log(joinFruit(fruits));

// Problem 6

// var names = ['Wil', 'Shamika', 'Samuel', 'Ramsey']

// Using the array above, create a fucntion that returns the string, 'Hello Wil, happy Friday!'
var names = ['Wil', 'Shamika', 'Samuel', 'Ramsey']
function greet(names) {
    return `Hello ${names} happy Friday!`
}
console.log(greet(names[0]));
// Create a funciton that returns the string, 'Hi Shamika and Ramsey!'
var names = ['Wil', 'Shamika', 'Samuel', 'Ramsey']
function greetTwo(names) {
    return `Hello ${names[1]} and ${names[3]}!`
}
//console.log(greetTwo);
// Create a function that returns the string, 'Howdy Sam!'
// Note: Be sure to change 'Samuel' to 'Sam'
var names = ['Wil', 'Shamika', 'Samuel', 'Ramsey']
function informalGreet(names) {
    names.splice(2, 1,'Sam')
    return `Howdy ${names[2]}!`
}
console.log(informalGreet(names));
// Problem 7

// var nums = [12, 3, 50, 1, 99, 2]

// Using a while loop, create a funciton that adds every number in the nums array and return the total number
// Note: this one is very challenging and requires a little bit of research, but give it shot!
// And remember to control - c if you log to the terminal and it is running infinitely!
var nums = [12, 3, 50, 1, 99, 2]
function total(){
    let i = 0 
    while (i < num.length)
    {
        sum += i;
        if (i == 4) break;
        i++;
    }
}console.log(total)