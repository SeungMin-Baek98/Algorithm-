const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const a = Number(input[0]); // x축
const b = Number(input[1]); // y축

if (a > 0 && b > 0) {
  console.log(1); // 제1사분면
}
if (a < 0 && b > 0) {
  console.log(2); // 제2사분면
}
if (a < 0 && b < 0) {
  console.log(3); // 제3사분면
}
if (a > 0 && b < 0) {
  console.log(4); // 제4사분면
}
