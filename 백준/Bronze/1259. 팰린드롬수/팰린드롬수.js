// 백준 1259
// 팰린드롬수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function isFalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") {
    break;
  } else {
    if (isFalindrome(input[i])) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
