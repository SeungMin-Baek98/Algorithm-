const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function isPalindrome(num) {
  let left = 0;
  let right = num.length - 1;

  while (left < right) {
    if (num[left] !== num[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") break;
  else {
    if (isPalindrome(input[i])) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
