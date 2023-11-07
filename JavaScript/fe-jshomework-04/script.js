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


document.querySelector("#result").innerHTML += fn(10,5)