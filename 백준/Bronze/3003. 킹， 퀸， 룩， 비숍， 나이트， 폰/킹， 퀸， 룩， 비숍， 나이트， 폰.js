const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let king = 1;
let queen = 1;
let look = 2;
let bishop = 2;
let knight = 2;
let pawn = 8;

king = king - input[0];
queen = queen - input[1];
look = look - input[2];
bishop = bishop - input[3];
knight = knight - input[4];
pawn = pawn - input[5];

console.log(king, queen, look, bishop, knight, pawn);
