function fizzBuzz() {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            arr.push("Buzz");
        }
    } return arr;
}
console.log(fizzBuzz(30));