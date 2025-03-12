const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const members = input.map((member) => member.split(" "));
members.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]; // 나이가 같으면 가입한 순으로 정렬
  } else {
    return a[0] - b[0]; // 나머지는 나이순으로 정렬
  }
});

console.log(members.map((member) => member.join(" ")).join("\n"));
