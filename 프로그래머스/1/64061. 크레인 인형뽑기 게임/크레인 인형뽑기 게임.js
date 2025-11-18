function solution(board, moves) {
  const n = board.length;
  const stack = [];
  var answer = 0;

  // Moves순회
  for (let i = 0; i < moves.length; i++) {
    const c = moves[i] - 1; // [0,4,2,4,0,1,0,4]

    for (let r = 0; r < n; r++) {
      if (board[r][c] !== 0) {
        const doll = board[r][c];
        board[r][c] = 0;

        if (stack[stack.length - 1] === doll) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(doll);
        }
        break;
      }
    }
  }

  return answer;
}