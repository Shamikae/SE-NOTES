// Responsible Drinking:
    // Welcome to the Codewars Bar!
    // Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

    // Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

    // Examples
    // "1 beer"  -->  "1 glass of water"
    // because you drank one standard drink

    // "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
    // because you drank ten standard drinks


    function hydrate(s) {
        let count = s.split(' ').map(a=>parseInt(a)).filter(a=>a).reduce((a,b)=>a+b);
        return `${count} glass${count>1?'es':''} of water`;
    }

//Or

    const hydrate = s => {
        // get an array with all the numbers in the string, and add the values using reduce
        const number = s.match(/\d/g)
                        .reduce((acc, val) => acc + parseInt(val), 0);
        return `${number} glass${number != 1 ? 'es' : ''} of water`;
      }

//Or
    function hydrate(s) {
        let number = 0;
    for (let i = 0; i < s.length; i++) {
        number += isNaN(parseInt(s[i])) ? 0 : parseInt(s[i]);
    }
    if (number === 1) {
        return number + " glass of water";
    } else return number + " glasses of water";
    }