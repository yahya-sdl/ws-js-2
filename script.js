function reverseString(str) {
    return str.split('').reverse().join('');
}
function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}

function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}


function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    let sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}


console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello world")); // 11
console.log(capitalizeWords("hello world")); // "Hello World"

console.log(findMaximum([1, 2, 3, 4, 5])); // 5
console.log(findMinimum([1, 2, 3, 4, 5])); // 1
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(filterArray([1, 2, 3, 4, 5], num => num > 3)); // [4, 5]

console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(fibonacciSequence(6)); // [0, 1, 1, 2, 3, 5]

