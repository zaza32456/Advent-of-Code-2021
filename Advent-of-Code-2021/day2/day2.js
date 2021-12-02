const { getInput } = require('./data')

function part1(arr) {
    let xCount = 0;
    let yCount = 0;
    for (let i = 0;i < arr.length;i++) {
        if (/^u/.test(arr[i])) {
            yCount -= Number(arr[i].match(/\d+$/));
        }
        else if (/^d/.test(arr[i])) {
            yCount += Number(arr[i].match(/\d+$/));
        }
        else if (/^f/.test(arr[i])) {
            xCount += Number(arr[i].match(/\d+$/));
        }
    }
    return Math.abs(xCount * yCount);
}

function part2(arr) {
    let xCount = 0;
    let yCount = 0;
    let depth = 0;
    for (let i = 0;i <arr.length;i++) {
        if (/^f/.test(arr[i])) {
            xCount += Number(arr[i].match(/\d+$/));
            depth += yCount * Number(arr[i].match(/\d+$/));  //一开始 depth += yCount * xCount ，xCount是不断累加的总forward，应该只加上当前forward。
        }
        else if (/^d/.test(arr[i])) {
            yCount += Number(arr[i].match(/\d+$/));
        }
        else if (/^u/.test(arr[i])) {
            yCount -= Number(arr[i].match(/\d+$/));
        }
    }
    return Math.abs(depth * xCount);
}

console.log(part2(getInput));

