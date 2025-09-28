// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorString(str) {
    // Reverse the original string
    const reversedStr = str.split('').reverse().join('');
    // Append the reversed string to the original string
    return str + reversedStr;
}

const originalString = "hello";
console.log(mirrorString(originalString)); // Output: "helloolleh"
const anotherString = "abcde";
console.log(mirrorString(anotherString)); // Output: "abcdeedcba"