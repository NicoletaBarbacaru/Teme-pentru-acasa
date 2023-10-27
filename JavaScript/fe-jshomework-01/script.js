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

//Request a radius of a circle and display the area of such a circle. 
let radius = prompt("Plese provide the circle radius");
let p = Math.PI;
let circleArea = p * radius * radius;
alert("The circle area is " + circleArea);

//Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.
let distance = prompt("What is the distance in km, between Chisinau and Orhei?");
let timeHours = prompt("What time do you need to cover it?");
let speed = Math.floor(distance / (timeHours));
alert("You need to drive with "+ speed + " km/h to be on time");

//Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
let USD = prompt("Please provide the amount in USD");
const exchangeRate = 0.95;
let amountEuro = USD * exchangeRate;
alert("You will receive " + amountEuro +" euro for "+ USD + "$")