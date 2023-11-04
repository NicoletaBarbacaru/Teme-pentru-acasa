// 1.Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
let number = prompt("Please enter a number");

let sum = 0;
for( let i = 1; i <= number; i++){
    sum += i;
}
console.log(sum);
alert(sum);
