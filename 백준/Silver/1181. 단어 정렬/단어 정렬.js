const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const strs = Number(input[0]);
let words = [];

for (let i = 1; i <= strs; i++) {
  words.push(input[i]);
}

// 중복된 값 제거를 함과 동시에 객체로 저장되는 값들을 배열로
// 저장하기위하여 자바스크립트 spread 문법 사용

words = [...new Set(words)];

words.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  } else {
    return a.length > b.length ? 1 : -1;
  }
});

console.log(words.join("\n"));
