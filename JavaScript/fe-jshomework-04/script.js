//1.Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is
// vice versa, and 0 if they are equal.
function fn(number1, number2){
    if(number1 < number2){
        return -1
    } else if(number1 == number2){
        return 0
    } else {
        return 1
    }
}


document.querySelector("#result").innerHTML += fn(2,5);

//2. Write a function that counts the factorial of a given number. 
function factorial(n){
    if(n==0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
factorial(4)
document.querySelector("#result1").innerHTML += factorial(4);

//3. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
function concat(str1,str2,str3){
    return `${str1}`+`${str2}`+ `${str3}`
}
concat(1,4,9);
document.querySelector("#result2").innerHTML += concat(1,4,9);

//4. Write a function that accepts the width and length of a rectangle and calculates its area. 
//If there is only one parameter given, it counts as a square. 

function rectangleArea(width,length){
    let area = width * length;
    if(width === length){
        return width * width
    } else return area
}
console.log(rectangleArea(10, 20));
console.log(rectangleArea(10));
document.querySelector("#result3").innerHTML += rectangleArea(10,20);