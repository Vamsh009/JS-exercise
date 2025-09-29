// Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds

async function multipliedbyTwoWithDelay(arr){
    return arr.map(num => new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    }));
}

Promise.all(multipliedbyTwoWithDelay([1, 2, 3, 4, 5])).then(results => {
    console.log(results); // [2, 4, 6, 8, 10] after approximately 500ms
});
