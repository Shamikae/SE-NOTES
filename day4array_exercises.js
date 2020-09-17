// Log outputs to the console to ensure your work is accurate

// level 0
    // declare a variable and set it euqal to an array of your favorite tv shows
    //var tvShows = ['Blackish', 'Mixedish', 'Grownish', 'Power'];
    // declare a variable and set it euqal to an array of your family members ages (lie if you want)
    //var famAge = [22, 37, 50, 60];
// level 1
    // add a tv show to the end of your tv show array
    //tvShows.push('Empire');
    // remove the first element from your ages array
    //famAge.shift();
// level 2
    // declare a variable and set it equal to your interests
    //var hobbies = [tennis, reading, dancing, cooking]
    // using code, add a new interest to the front of the array 
    //hobbies.unshift('swimming');
    // using code, remove the last interest
    //hobbies.pop();

// level 3
    // given an array with a phone number from the USA, ['516-555-5555'] convert it into a string, add '+1' to the front, and convert it back to an array.
    var numString = ['516-555-5555']
    numString.splice(0,0,'+1')
    var number = numString.join('-')
    console.log(number);


// level 4
    // given the following array, insert a new item into the center try without notes, use the internet if needed instead
    var fruits = ['apple', 'orange', 'peach', 'lemon'];

    let start = 2;
    let deleteCount = 0;
    fruits.splice(start, deleteCount, 'mango')
    console.log(fruits);

// level 5
    var famousPeople = ['Barak Obama', 'Emma Watson', 'David Beckham', 'Justice Beaver'];
    // Given the previous array of names, get the last person's initials

    // Write pseudocode before starting   
    // HINT: Break this problem into parts, it will take multiple lines of code. 
     

// level 6
    // given an array of names, get the middle person's initials
