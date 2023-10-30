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