const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const students = input[1].split(" ");
let studentMap = new Map();

for (const student of students) {
  studentMap.set(student, 0);
}

const likes = input.slice(2).join(" ").toString().split(" ").sort();

for (const like of likes) {
  if (studentMap.has(like)) {
    studentMap.set(like, studentMap.get(like) + 1);
  } else {
    studentMap.set(like, 0);
  }
}

studentMap = [...studentMap].sort((a, b) => b[1] - a[1]);

for (const [key, value] of studentMap) {
  console.log(`${key} ${value}`);
}
