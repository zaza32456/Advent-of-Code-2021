const { getInput } = require('./data')

//首先需要取得 伽马速率 ，ε速率 ，这里用数组获得每列的数据，最后用.join()合成数字。 
//伽马速率由每列出现次数更多的数组成 ，ε速率相反。
//最后返回 该 2进制  伽马速率 ，ε速率 转化为 10进制 相乘的结果。

function part1(arr) {
    let speed1 = [];
    let speed2 = [];
    for (let i = 0; i < arr[0].length;i++) {
        let numOf1 = arr.filter((item) => item[i] == 1);
        if (numOf1.length * 2 > arr.length) {
            speed1.push(1);
            speed2.push(0);
        }else {
            speed1.push(0);
            speed2.push(1);
        }
    }
    return parseInt(speed1.join(""), 2) * parseInt(speed2.join(""), 2);
}

console.log(part1(getInput));




//辅助函数
function getNum1(arr, m) {        //检测o2的m位的0,1情况。
    let numOf1 = arr.filter((item) => item[m] == 1).length;         //检测m位为1的数量，如果 >= arr长度的一半则m位为1；
    if (numOf1 * 2 >= arr.length) {
        return 1;
    }else {
        return 0;
    }
}  

function getNum2(arr, m) {        //检测co2的m位的0,1情况。
    let numOf0 = arr.filter((item) => item[m] == 0).length;         //检测m位为0的数量，如果 <= arr长度的一半则m位为0；
    if (numOf0 * 2 <= arr.length) {
        return 0;
    }else {
        return 1;
    }
}   

//主体函数
function getOxy(arr) {
    for (let i = 0; i < arr[0].length;i++) {
        if (arr.length == 1) {   
            break;
        }else {
            arr = arr.filter((item) => item[i] == getNum1(arr, i));
        }
    }
    return arr;
}

function getCo2(arr) {
    for (let i = 0; i < arr[0].length;i++) {
        if (arr.length == 1) {   
            break;
        }else {
            arr = arr.filter((item) => item[i] == getNum2(arr, i));
        }
    }
    return arr;
}

//解答函数
function part2 (arr) {
    return parseInt(getOxy(arr)[0], 2) * parseInt(getCo2(arr)[0], 2);
}

console.log(part2 (getInput));
