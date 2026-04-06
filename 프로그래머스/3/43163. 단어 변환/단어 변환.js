// 1. word1 랑 word2가 한 글자만 다른지 확인하는 함수
function isOneLefferDiff(word1, word2) {
  let diffCount = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diffCount++;

    if (diffCount > 1) return false;
  }

  return diffCount === 1;
}

function solution(begin, target, words) {
  // 1. words 배열에서 target없으면 0 반환
  if (!words.includes(target)) return 0;

  // 2. begin에서 target으로 바꿔야하는데, words 배열에 있는 단어로만 바꿀 수 있다.
  // 3. begin에서 한 글자만 바꿔서 words 배열에 있는 단어로 바꿀 수 있다.
  // 4. 3과정을 반복해서 target으로 바꿀 수 있는 가장 짧은 변환 과정의 길이를 반환한다.
  // 5. BFS 방식
  let queue = [[begin, 0]];

  // 6. BFS는 큐가 빌 때까지 반복
  while (queue.length) {
    const [current, count] = queue.shift();

    if (current === target) return count;

    for (const word of words) {
      if (isOneLefferDiff(current, word)) {
        queue.push([word, count + 1]);
      }
    }
  }
  return 0;
}
