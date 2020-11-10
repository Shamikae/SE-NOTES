//Remove consecutive duplicate words:
    //Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:

    // "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

    // --> "alpha beta gamma delta alpha beta gamma delta"

    //convert the String into an array.
    //Then I will need to call the Set (object) on that array — this removes the duplicates.
    //I will need the Set back to an array and then convert this array back to a string.

    const removeConsecutiveDuplicates = s => {
        const arr = s.split(' ');
        const newArr = [];
        for(let i = 0; i < arr.length; i++){
        if (arr[i] !== arr[i+1])(
          newArr.push(arr[i])
        )
        }
        return newArr.join(' ');
        }
        console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

        //or

        const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");