const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();


for (let i = 0; i < input.length; i++) {
  let string = input[i];
  if (string === string.toUpperCase()) {
    string = string.toLowerCase();
  } else {
    string = string.toUpperCase();
  }
  process.stdout.write(string);
}

process.stdout.write("\n");
