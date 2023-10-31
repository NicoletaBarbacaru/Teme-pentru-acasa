//Request a three-digit number from a user and check whether it has identical digits in it.
let number = prompt("Please enter a three-digit number");
let str = number.toString();
let firstDigit = str[0];
let secondDigit = str[1];
let thirdDigit = str[2];
if(firstDigit === secondDigit && secondDigit === thirdDigit){
   alert("True")
} else {
    alert("False")
}
//Request a five-unit number from a user and check whether it is a palindrome.

let fiveDigitNumber = prompt("Please enter a five-unit number");
let stringToArray = fiveDigitNumber.toString().split('');
let reversedArray = fiveDigitNumber.toString().split("").reverse();
console.log(stringToArray, reversedArray);

for (let i = 0;i < stringToArray.length; i++){
if(stringToArray[i] === reversedArray[i]){
    alert("It is a palindrome")
} else {
    alert ("It is not a palindrome")
}}


//Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.

let date = new Date("14 Oct 2023");
let currentDate = prompt("Please enter a date", date);