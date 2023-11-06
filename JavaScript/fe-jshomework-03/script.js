// 1.Write a program that requests a number from a user and finds the summation of every number from 1 to num. 
//For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
let number = prompt("Please enter a number");

let sum = 0;
for( let i = 1; i <= number; i++){
    sum += i;
}
console.log(sum);
alert(sum);

// 2.Request two numbers and find only their largest common divisor.
let number1 = prompt("Please enter number1");
let number2= prompt("Please enter number2");

let LCD = 0;
for( let i = 1; i < number1 && i < number2; i++){
    if(number1 % i == 0 && number2 % i == 0){
        LCD = i;
    }
}
console.log(LCD);

let n = prompt("Please enter a number");
let commonDivisor = 0;
for( let i = 1; i <= n; i++){
    if( n % i === 0){
        console.log(i)
    }
}