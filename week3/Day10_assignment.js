//Is n divisible by x and y?
    //Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

    // Examples:
    // 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
    // 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
    // 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
    // 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
        return true
    }
    else {
        return false
    }

}
    console.log(isDivisible(3,1,3))

//or 
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
  }
//or 
function isDivisible(n, x, y) {
    return !(n%x||n%y)
  }

//Convert number to reversed array of digits
    // Convert number to reversed array of digits
    // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

    // Example:
    // 348597 => [7,9,5,8,4,3]

    function digitize(n) {
        let arr = String(n).split("").reverse().map(Number);
        
        return arr;
        }
        
        console.log(digitize(348597));
    //or 
    function digitize(n) {
        return String(n).split('').map(Number).reverse()
      }

//Abbreviate a Two Word Name:
    // Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
    // The output should be two capital letters with a dot separating them.
    // It should look like this:
    // Sam Harris => S.H
    //Patrick Feeney => P.F

    function abbrevName(name){
        let splitName = name.split(' ');
        let firstInitial = splitName[0][0];
        let lastInitial = splitName[1][0];
        let initials = firstInitial.toUpperCase() + '.' + lastInitial.toUpperCase()
      
          return initials;
      
      }
      
          console.log(abbrevName('john Smith'));

//or 
    function abbrevName(name){

        let nameArray = name.split(" ");
        return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
    }

//A Needle in the Haystack:
    // Can you find the needle in the haystack?
    // Write a function findNeedle() that takes an array full of junk but containing one "needle"
    // After your function finds the needle it should return a message (as a string) that says:
    // "found the needle at position " plus the index it found the needle, so:
    // findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

    function findNeedle(haystack) {
        return "found the needle at position " + haystack.indexOf("needle");
      }
      
          console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

//Keep Hydrated!:

    // Nathan loves cycling.
    // Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
    // You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

    // For example:
    // time = 3 ----> litres = 1
    // time = 6.7---> litres = 3
    // time = 11.8--> litres = 5

    function litres(time) {
        return Math.floor(time /2);
      }
      console.log(litres(6.7))

      //or

      const litres = time => Math.floor(time /2);
      //or 
      const litres = time => Math.floor(time * 0.5);

