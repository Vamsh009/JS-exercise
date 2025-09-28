// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleWithoutConsecutiveDuplicates(arr) {
    if (arr.length === 0) return [];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i] * 2);
        }
    }
    return result;
}
console.log(doubleWithoutConsecutiveDuplicates([1, 2, 2, 3, 4, 4, 4, 5])); // [2, 4, 6, 8, 10]
console.log(doubleWithoutConsecutiveDuplicates([7, 7, 8, 9, 9])); // [14, 16, 18]