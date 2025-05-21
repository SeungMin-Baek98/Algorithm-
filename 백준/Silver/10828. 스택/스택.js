// 백준 10828
// 스택

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const commands = input;

const stack = [];
const result = [];

commands.forEach((command) => {
  const [cmd, value] = command.split(" ");

  switch (cmd) {
    case "push":
      stack.push(Number(value));
      break;
    case "pop":
      result.push(stack.length === 0 ? -1 : stack.pop());
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
      break;
  }
});

console.log(result.join("\n"));
