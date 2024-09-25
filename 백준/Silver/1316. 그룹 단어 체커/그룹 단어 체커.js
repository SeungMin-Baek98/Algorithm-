const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(input[0]);
let duplicatedWord = 0;

for (let i = 1; i <= num; i++) {
  const word = input[i];
  const check = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    // 현재 문자가 check에 없으면 추가
    if (check.indexOf(word[j]) === -1) {
      check.push(word[j]);
    } else {
      // 이미 있는 문자일 경우, 그 문자가 마지막으로 나온 문자인지 확인
      if (word[j] !== check[check.length - 1]) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    duplicatedWord += 1;
  }
}

console.log(duplicatedWord);
