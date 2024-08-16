const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let sum = 0;

input.map((item) => {
  const number = parseInt(item);
  sum = sum + number * number;
});

console.log(sum % 10);
