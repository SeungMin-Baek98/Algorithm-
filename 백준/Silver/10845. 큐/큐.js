// 백준 10845
// 큐

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const commands = input.slice(1);
const queue = [];
const result = [];

commands.forEach((command) => {
  const [cmd, value] = command.split(" ");

  switch (cmd) {
    case "push":
      return queue.push(Number(value));
    case "pop":
      return result.push(queue.length === 0 ? -1 : queue.shift());
    case "size":
      return result.push(queue.length);
    case "empty":
      return result.push(queue.length === 0 ? 1 : 0);
    case "front":
      return result.push(queue.length === 0 ? -1 : queue[0]);
    case "back":
      return result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
  }
});

console.log(result.join("\n"));
