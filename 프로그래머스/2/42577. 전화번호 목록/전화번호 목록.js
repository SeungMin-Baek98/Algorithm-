function solution(phone_book) {
  phone_book.sort(); // 정렬을 해두면 양 옆 번호들의 접두어가 똑같은게 위치한다.

  // 마지막 요소가 현재가 될 필요는 없다. 그래서 배열 길이의 -1 까지 순회를 해준다.
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }

  return true;
}
