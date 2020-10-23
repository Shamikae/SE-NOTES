//Get the mean of an array:
    // It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

    // Return the average of the given array rounded down to its nearest integer.

    // The array will never be empty.

    function getAverage(marks){
        // 
        let value = marks.reduce(function(a, c){
          return a + c })
        let finalVal = value/marks.length
        return Math.floor(finalVal)
        }

//or 
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }
