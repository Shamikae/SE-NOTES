// Meeting: John has invited some friends. His list is:

    // s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
    // Could you make a program that

    // makes this string uppercase
    // gives it sorted in alphabetical order by last name.
    // When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

    // So the result of function meeting(s) will be:

    // "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
    // It can happen that in two distinct families with the same family name two people have the same first name too.



function meeting(s) {
// seperate every full name at ';' into its own string
let splitNames = s.split(';')
console.log(splitNames)
//  let sorted = splitNames.sort()
//  console.log(sorted)
let accum = []

    for(i = 0; i< splitNames.length; i++){
        let arr = splitNames[i].toUpperCase().split(':')
        arr[1] //first names
        arr[0] //last names
        let revName = "(" + arr[1] + ', ' + arr[0] + ')' 
        accum.push(revName)
    }
    accum.sort()
    return accum.join("")
  }

  console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))

