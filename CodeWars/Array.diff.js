//Array.diff:
    // Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

    // It should remove all values from list a, which are present in list b.

    // arrayDiff([1,2],[1]) == [2]
    // If a value is present in b, all of its occurrences must be removed from the other:

    // arrayDiff([1,2,2,2,3],[2]) == [1,3]

    //check if values in list b are in list a
    //remove values from list a that are in list b 
    //return list a with removed values

    // short answer
    let arrayDiff = (a, b) => a.filter(r => !b.includes(r));

    console.log(arrayDiff([1,2,2,3],[2, 3]))

    //
    function array_diff(a, b) {

        var arr = new Array();
        
        for(var i = 0;i<a.length;i++){
            if(b.indexOf(a[i])<0){
                arr.push(a[i]);
            }
        }
      
        return arr;
    }

    //or 
    let arrayDiff = (a, b) => a.filter(r => b.indexOf(r) === -1);

    console.log(arrayDiff([1,2,2,3],[2, 3]))

    function array_diff(a, b) {
        let x = newA
        return a.filter()
    }