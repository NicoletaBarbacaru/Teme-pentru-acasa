// Request a user’s name and display the response “Hello, [name]”.
let name = prompt("What is your name?")
let response = "Hello,"+" "+ name;
alert(response);

//Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 
let userYear = prompt("What is your birth year?");
const currentYear = 2023;
let result = currentYear - userYear;
alert("You are " + result +" years old");

//Request a length of a side of a square from a user and display the perimeter of the square.
let sideLength = prompt("What is the square side length?");
let perimeter = 4 * sideLength;
alert("The perimeter of the square is " + perimeter);