//Calculate average:
    //Write function avg which calculates average of numbers in given list.

    function find_average(array) {
        var total = 0;
     for(var i = 0; i < array.length; i++) {
         total += array[i];
     }
     var avg = total / array.length;
       return avg;
     }
     
     console.log(find_average([5, 5, 5, ]))
     
//or      

function find_average(array) {
    return array.reduce((result, current) => result + current, 0) / array.length;
  }



