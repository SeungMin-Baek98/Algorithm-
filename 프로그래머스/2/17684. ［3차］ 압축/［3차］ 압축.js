function solution(msg) {
  const answer = [];

  // 1. 알바벳 + 점수 저장할 객체 생성
  // 'A' = 1
  // 'B' = 2
  const dictionary = {};
  let w = "";
  let nextIdx = 27;
  for (let i = 0; i < 26; i++) {
    dictionary[String.fromCharCode(65 + i)] = i + 1;
  }

  // w(현재 입력) c(다음 글자)
  // 3-1. c가 dictionary key랑 같은 값이면은 answer에 value 푸시
  // 4.w + c를 해서 없는 같이면은 dictiony key : w + c / value : 26 + 1
  // 4-1. 4과정을 한다음 break일단 종료

  // 5. 1-4 과정 반복

  for (let i = 0; i < msg.length; i++) {
    let c = msg[i];
    let wc = w + c;

    // w 랑 dictionary key값이랑 동일하다면? -> key값의 value 푸시
    if (dictionary[wc]) {
      w = wc;
    } else {
      answer.push(dictionary[w]);
      dictionary[wc] = nextIdx++;
      w = c;
    }
  }
  // 마지막 값이 w같으면 answer에 value푸시
  if (w) {
    answer.push(dictionary[w]);
  }

  return answer;
}