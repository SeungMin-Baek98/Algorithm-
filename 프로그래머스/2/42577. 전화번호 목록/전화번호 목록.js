function solution(phone_book) {
  // 배열 정렬을 통하여 양 쪽 접두어가 양쪽에 오도록 위치
  phone_book.sort();

  // 배열 탐색을 길이 - 1까지 해준다.
  // 0 1 2 인경우에 비교군이 앞선 idx이므로 마지막 2인경우 undefined와 비교대상이므로
  // 결과 잘못 나올 수 있음
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }

  return true;
}
