//Descending Order:
    // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

    // Examples:
    // Input: 42145 Output: 54421
    // Input: 145263 Output: 654321
    // Input: 123456789 Output: 987654321

    function descendingOrder(n){
        let convertN = n.toString();
        let newArray = convertN.split('');
        let sortArray = newArray.sort();
        let reverseArray = sortArray.reverse();
        let joinArray = sortArray.join('');
        let returnNum = Number(joinArray);
        return returnNum;
        
      }
      
      console.log(descendingOrder(568431))

      //or

      function descendingOrder(n) {
        return descendInt(n.toString().split('').sort().reverse().join(''));
      }

//Grasshopper - Summation:
    // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

    // For example:
    // summation(2) -> 3
    // 1 + 2
    // summation(8) -> 36
    // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

    let summation = function (num) {
        let total = 0;
         for(let i = 1; i <= num; i++){
           total += i;
         }
         return total;
     }
     console.log(summation(3))

     //or 
     const summation = n => n * (n+1) / 2;
     //or 
     function summation(num) {
        return num * (num + 1) / 2
      }

//Square(n) Sum:
    // Complete the square sum function so that it squares each number passed into it and then sums the results together.

    // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

    function squareSum(numbers) {
        return numbers.reduce(function(sum, num) {
          return (num * num) + sum;
        }, 0)
    }
    
    console.log(squareSum([1, 2, 2]))

    //or 
    function squareSum(numbers){
        return numbers.reduce((sum,num) => sum + (num * num), 0);
      }

//Basic Mathematical Operations:
    // Your task is to create a function that does four basic mathematical operations.

    // The function should take three arguments - operation(string/char), value1(number), value2(number).
    // The function should return result of numbers after applying the chosen operation.

    // Examples
    // basicOp('+', 4, 7)         // Output: 11
    // basicOp('-', 15, 18)       // Output: -3
    // basicOp('*', 5, 5)         // Output: 25
    // basicOp('/', 49, 7)        // Output: 7

    function basicOp(operation, value1, value2){
        if(operation == '+')return value1 + value2;
        if(operation == '-')return value1 - value2;
        if(operation == '*')return value1 * value2;
        if(operation == '/')return value1 / value2;
    }
    console.log(basicOp('+', 2, 8))
    
    //or 

    function basicOp(operation, value1, value2)
    {
        return eval(value1 + operation + value2); 
    }
        //The eval() function evaluates or executes an argument If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.

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

      const litres = time => Math.floor(time * 0.5);

//Century From Year:
    // Introduction:
    // The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

    // Task :
    // Given a year, return the century it is in.

    // Input , Output Examples ::
    // centuryFromYear(1705)  returns (18)
    // centuryFromYear(1900)  returns (19)
    // centuryFromYear(1601)  returns (17)
    // centuryFromYear(2000)  returns (20)

    function centuryFromYear(year) {
        let centuryCount = 0;
        while (year > 0){
          year = year - 100;
          centuryCount = centuryCount + 1;
        }
        return centuryCount;
      }
      console.log(centuryFromYear(2000))

      //or

      function century(year) {
        return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
      }

      //or 

      const century = year => Math.ceil(year/100)