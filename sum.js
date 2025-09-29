// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
    let sum = 0;

    for (let num of arr) {
        if (num < 0) {
            break; // Stop summing when a negative number is encountered
        }
        sum += num; // Add the current number to the sum
    } 
    return sum;
}

console.log(sumUntilNegative([1,2,3,4,5,9]))
