const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop(); // 입력의 마지멱 줄 삭제

//성인부 조건 : 나이가 17세보다 많거나  or  몸무게가 80kg이상.

for (let i = 0; i < input.length; i++) {
  const newArr = input[i].split(" ");
  const name = newArr[0];
  const age = newArr[1];
  const weight = newArr[2];
  let grade = "";
  if (age > 17 || weight >= 80) {
    grade = "Senior";
  } else {
    grade = "Junior";
  }
  console.log(`${name} ${grade}`);
}
