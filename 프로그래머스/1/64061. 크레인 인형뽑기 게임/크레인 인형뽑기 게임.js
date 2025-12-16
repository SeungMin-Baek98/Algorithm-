function solution(board, moves) {
  const stack = [];
  var answer = 0;

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1;

    // board순화한 값이 0이 아니라면
    for (let j = 0; j < board.length; j++) {
      if (board[j][move] !== 0) {
        const doll = board[j][move]; // stack에 넣을 인형 추출
        board[j][move] = 0; // 그 인형 좌표값 0으로 최신화
        if (doll === stack[stack.length - 1]) {
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
