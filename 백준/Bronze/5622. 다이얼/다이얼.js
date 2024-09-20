const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

let charCodeAt = input.map((item) => {
  return item.charCodeAt();
});
let totalResult = 0;

for (let i = 0; i < charCodeAt.length; i++) {
  let result = 0;
  // A,B,C
  if (charCodeAt[i] >= 65 && charCodeAt[i] <= 67) {
    result = 2;
  }

  // D,E,F
  if (charCodeAt[i] >= 68 && charCodeAt[i] <= 70) {
    result = 3;
  }

  // G,H,I
  if (charCodeAt[i] >= 71 && charCodeAt[i] <= 73) {
    result = 4;
  }

  //J,K,L
  if (charCodeAt[i] >= 74 && charCodeAt[i] <= 76) {
    result = 5;
  }

  //M,N,O
  if (charCodeAt[i] >= 77 && charCodeAt[i] <= 79) {
    result = 6;
  }

  //P,Q,R,S
  if (charCodeAt[i] >= 80 && charCodeAt[i] <= 83) {
    result = 7;
  }

  //T,U,V
  if (charCodeAt[i] >= 84 && charCodeAt[i] <= 86) {
    result = 8;
  }

  //W,X,Y,Z
  if (charCodeAt[i] >= 87 && charCodeAt[i] <= 90) {
    result = 9;
  }
  result += 1;
  totalResult += result;
}
console.log(totalResult);
