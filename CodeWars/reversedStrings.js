//Complete the solution so that it reverses the string passed into it.

function solution(str){
//declare a variable called arr and equal it to the string split on an empty string
    let arr = str.split('');
//revers the array using the reverse method
    let rev = arr.reverse();
//convert our reversed arraat into a string using an empty string
    let finalstr = rev.join('');
//return our final string
    return finalstr;
}
console.log(solution("Hello World"))