const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputLine = input.shift();

for (let i = 0; i < inputLine; i++) {
  const newArr = input[i].split(" ");
  const repeatCount = newArr[0];
  const repeatString = newArr[1];
  let result = [];

  for (let j = 0; j < repeatString.length; j++) {
    result.push(repeatString[j].repeat(repeatCount));
  }

  console.log(result.join(""));
}
