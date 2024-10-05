const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

for (let i = 0; i < input.length; i++) {
  if (input[i] === -1) break;

  const nums = input[i];
  let totalSum = 0;
  let divisor = [];

  for (let j = 1; j < nums; j++) {
    if (nums % j === 0) {
      divisor.push(j);
      totalSum += j;
    }
  }

  if (totalSum === nums) {
    console.log(`${nums} = ${divisor.join(" + ")}`);
  } else {
    console.log(`${nums} is NOT perfect.`);
  }
}
