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
alert(LCD);
// 3. Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
let n = prompt("Please enter a number");
let divisors = [];
for( let i = 2; i <= n; i++){
    if( n % i === 0){
        divisors.push(i);
    }
}
alert(divisors)

// 4. Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
let nr = prompt("Please enter the number");
let nrToArr = nr.toString().split("");
alert("There are " + nrToArr.length +" digits in " + nr);

// 5. Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. 
// Display the statistics. There’s only one variable (not 10) needed for input by a user. 
let numbersArray = new Array(10);
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;
for( let i = 0; i < numbersArray.length; i++){
    let input = prompt("Please enter number"+ (i+1) + "from " + numbersArray.length);
    numbersArray[i] = Number(input);
    if(numbersArray[i] > 0){
        console.log(numbersArray[i]);
        positive++
    } else if(numbersArray[i] == 0){
        zero++
    } else{
        negative++
    }
    if(numbersArray[i] == 0 && numbersArray[i] % 2 == 0){
        even++
    } else  {
        odd++
    }
}
console.log(numbersArray);
alert("There are " + positive + " positive numbers");
alert("There are " + negative + " negative numbers");
alert("There are " + zero + " numbers equal to zero");
alert("There are " + even + " even numbers");
alert("There are " + odd + " odd numbers");

let positiveNumbers = document.getElementById("positive")
positiveNumbers.innerHTML += positive;