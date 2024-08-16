const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");


const a = parseInt(input[0]);

for (let i = 0; i < 1; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${a} * ${j} = ${a * j}`);
  }
}
