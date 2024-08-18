const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = input;

if ((num % 4 === 0 && num % 100 !== 0) || (num % 4 === 0 && num % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}
