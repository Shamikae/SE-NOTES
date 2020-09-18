//Q1:Write some code that will split up a string into a clear string names.

var name = 'Manami+Anam';
    console.log(name.replace('+',', '));

//Q2:Write some code that gives us the length of a given string.

    // For example 'Peter Parker' gives us 12.

    // For example 'Michelle Obama' gives us 14.

var state = 'Mississippi'
console.log(state.length);

//Q3:A: Write some code that converts a string into all capitals

    // For example: 'Peter Parker' changes to 'PETER PARKER'.
var caps = 'Peter Parker'
console.log(caps.toUpperCase());

    // B: Write some code that converts a string into all lowercase.
var caps = 'PETER PARKER'
console.log(caps.toLowerCase());
    
// Q4:A: Write some code that extrapolates the second word from the string: "My home town.".

    // The result should be: 'home'
var word = "My home town.";
console.log(word.slice(3,7));

// B: Write some code that extrapolates the second word from the string: "Lets eat, Grandpa!".
    // The result should be: 'eat'  
var word2 = "Lets eat, Grandpa!";
console.log(word2.substr(5,3));
// Q5:Write some code that capitalizes a portion of a given string.
    // For example: "I'm very happy" becomes, "I'm VERY happy!"
var capPortion = "I'm very happy";
capPortion = capPortion.replace('very','very'.toUpperCase());
console.log(capPortion);

//Q6: Write some code that retrieves the 3rd item from the array ['Red', 'Green', 'Yellow', 'Purple']
var arr = ['Red', 'Green', 'Yellow', 'Purple'];
thirdItem = arr[2];
console.log(thirdItem);

//Q7: Write some code that converts the array ['Red', 'Green', 'Yellow', 'Purple'] to ['Green', 'Yellow', 'Blue', 'Purple', 'Pink']
var colors = ['Red', 'Green', 'Yellow', 'Purple'];
colors.splice(0,4,'Green', 'Yellow', 'Blue', 'Purple', 'Pink');
console.log(colors);


 


 