const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().toUpperCase();

// 대문자 A~Z 담을 배열 생성
const newArr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  newArr[input.charCodeAt(i) - 65]++;
}

const maxNum = Math.max(...newArr);
const index = newArr.indexOf(maxNum);

let isSame = false;

for (let j = 0; j < newArr.length; j++) {
  if (newArr[j] === maxNum && j !== index) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
