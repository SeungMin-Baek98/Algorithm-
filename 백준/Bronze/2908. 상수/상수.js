const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const num = input.map((item) => {
  let reversedNum = item.split("");
  reversedNum.reverse();
  return parseInt(reversedNum.join(""));
});

console.log(Math.max(...num));
