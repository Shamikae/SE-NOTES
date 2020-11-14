// Give me the k first digits. Odd digits.
// You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

    // EX: Given n,  123456789111, and k, 5, return the first k odd digits in n, 13579.

// The output should also be an integer.

// In the following cases a function should return 0:
    // there are no odd digits in a number n;
    // k is bigger than a number of digits in n;
    // k = 0;
    // k is bigger than a number of odd digits in n.
    // BTW, is 0 an odd number or an even one?

//Steps:
    // 1.Create empty string
    // 2.Find all odd numbers
    // 3.Find the first k numbers
    // 4.Return the number

function findOddDigits(n, k) {
    let str = '';
    let num = n.toString();
    for (let i = 0; i < num.length; i++)
        if (str.length < k && + num[i] % 2 == 1)
            str += num[i];
    return str.length == k ? +str : 0;
}
console.log(findOddDigits(123456789111, 5));

// or

// function findOddDigits(n, k) {
//     // k = 0;
//     // k is bigger than a number of digits in n;
//     if (k === 0 || k > n)

//         return 0;

    // find all odd digits
//     let str = String(n);
//     let split = str.split("");
//     let odds = split.filter((num) => num % 2);

//     // there are no odd digits in a number n;
//     // k is bigger than a number of odd digits in n.
//     if (!odds.length || k > odds.length) return 0;

//     // find the first `k` digits
//     let joined = odds.join("");
//     let sliced = joined.slice(0, k);

//     // return the number
//     return Number(sliced);
// }

console.log(findOddDigits(123456789111, 5), 13579, 'Should return first k odd digits in a given number!');
console.log(findOddDigits(7459274655920285, 8), 75975595, 'Should return first k odd digits in a given number!');
console.log(findOddDigits(0, 100), 0, 'Oops, the given number length is less than k!');