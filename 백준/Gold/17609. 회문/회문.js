const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const words = input.slice(1);

function TwoPoint(word, left, right) {
  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}

function solution(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      if (TwoPoint(word, left + 1, right) || TwoPoint(word, left, right - 1))
        return 1;
      return 2;
    }
  }
  return 0;
}

const result = [];
for (const word of words) {
  result.push(solution(word));
}
console.log(result.join("\n"));
