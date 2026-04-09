function solution(s, skip, index) {
  var answer = "";

  // 1. skip에 있는 알파벳 제거
  // 2. s의 각 알파벳을 index만큼 이동하여 answer에 추가
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const skipSet = new Set(skip.split(""));

  // 3. skip에 있는 단어를 제외하고 알파벳 배열 생성
  const alphabetSkip = alphabet.filter((item) => !skipSet.has(item));

  for (const char of s) {
    // 4. s의 현재 idx 구하기
    const currentIndex = alphabetSkip.indexOf(char);
    console.log(currentIndex);

    // 5. alphabetskip길이만큼 나누어 배열에 더해주기
    const newIndex = (currentIndex + index) % alphabetSkip.length;

    answer += alphabetSkip[newIndex];
  }

  return answer;
}
