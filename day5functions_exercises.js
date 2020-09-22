// level 0
    // create a function which returns the value, 'Hello'
    function welcome(param){
        return "Hello!";
    };
    
    console.log(welcome());
    // create a function which returns the value, 'Goodbye!
    function leave(param){
        return "Goodbye!";
    };
    
    console.log(leave());

// level 1
    // create a function which has two parameters and returns the product of the two
    function muti(num1,num2){
        return num1 * num2;
    };
     
    console.log(muti(12,13));
    // create a function which has one parameter and returns a custom greeting using that param
    var name = 'Shamika'
    function person(name){
        return `Hello ${name}! Welcome to Nebula Academy.`
    }
    
    console.log(person(name));
// level 2
    // create a function which takes in a string and removes all dashes and replaces them with spaces. 
    var state = 'NY-NJ-CT-PA'
    function stateSpace(param){
        return param.replace(/-/g, ' ');   
    }
    
    console.log(stateSpace(state));
// level 3
    // create a function which takes in an array and removes the last and first items 

    var colors = ['red', 'blue', 'green', 'white', 'pink']
    function arryColor(param){
        param.pop();
        param.shift();

        return param;
         
    }
    console.log(arryColor(colors));

  // NEW QUESTIONS

// level 1
    // create a function which returns the opposite of a number
    // Examples:
        // input: -1, output: 1
        // input: 40, output: -40 
var num = -1;
function opposite(num){
    return(-num)
}
console.log(opposite(num));
// level 3
    // create a function which takes in a non-integer and returns that number multiplied by 13 and then rounded UP to the next integer
var nonInt = 4/1
// level 4
    // create a function which takes in a string and removes the first, last, and middle letters
    // create a function which returns a random whole number between 25 & 50
  