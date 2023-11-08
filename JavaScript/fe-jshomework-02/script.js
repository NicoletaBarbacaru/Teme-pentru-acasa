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
}
break;
}

//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 
let USD = prompt("Please enter the amount in USD");
let exchangeRate = 0.95;
let response = prompt("Please select a currency");
let euro = USD * exchangeRate;
let ronExRate = 4.69;
let roni = Math.floor(USD * ronExRate)
if(response === "EUR"){
    alert(`You will receive ${euro} euro for ${USD}$ `)
}
if(response === "RON"){
    alert(`You will receive ${roni} roni for ${USD}$ `)
}

//Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.
let circLength = prompt("Please enter the circumference length");
let perimeter = prompt("Please enter the square perimeter");
const side = perimeter / 4;
const diameter = circLength / Math.PI;
const r = circLength /(2*Math.PI)
if(diameter <= side){
    alert("Yes")
} else {
    alert ("No")
}

//Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.
let date = prompt("Please provide a date");
let nextDate = new Date(date);
console.log(nextDate)
nextDate.setDate(nextDate.getDate() + 1);
console.log(nextDate.toDateString())
alert("The next date is "+ nextDate.toDateString());