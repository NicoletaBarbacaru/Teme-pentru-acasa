//1. Create an object that describes a car (manufacturer, model, year of release, average speed) 
//and the following methods for working with this object:

// A method that displays the car info 
// A method for counting a time frame necessary to cover a given distance with the average speed. 
//Note that every 4 hours the driver has to take a 1-hour break.

const car = {
    manufacturer:"Kia Motors",
    model:"Picanto",
    "year of release": 2014,
    "average speed": 80,
    display(){        
        return `${car.manufacturer}, ${car.model}, ${car["year of release"]}, ${car["average speed"]}`
    },
    countTime(){
        const distance = 500;
        return distance /`${car["average speed"]}` ;
    }
}
console.log(car.display());
console.log(car.countTime());
document.getElementById("info").innerHTML += car.display();
// 2. Create an object that contains separately the numerator and the denominator of a fraction, 
//and the following functions for working with this object:
// A function for adding two fraction objects.
// A function for subtracting two fraction objects.
// A function for multiplying two fraction objects.
// A function for dividing two fraction objects.
// A function for simplifying a fraction object. 

const fraction = {
    numerator:2,
    denominator:3
            }