const { getInput } = require('./data')

console.log(getInput);

function part1(arr) {
    let count = 0;
    for (let i = 1;i < arr.length;i++) {
        if (arr[i] > arr[i-1]) {
            count++;
        }
    }return count;
}

function part2(arr) {
    let count = 0;
    for (let i = 3;i < arr.length;i++) {
        if (arr[i] > arr[i-3]) {
            count++;
        }
    }return count;
}

console.log(part1(getInput));
console.log(part2(getInput));