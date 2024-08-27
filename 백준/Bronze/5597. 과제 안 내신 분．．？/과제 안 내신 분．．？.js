const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 1번부터 30번까지의 번호를 배열로 생성
let students = Array.from({ length: 30 }, (_, idx) => idx + 1);

// 제출한 학생의 번호를 배열에서 제거
input.forEach((num) => {
  const index = students.indexOf(num);
  if (index > -1) {
    students.splice(index, 1);
  }
});

console.log(students.join("\n"));
