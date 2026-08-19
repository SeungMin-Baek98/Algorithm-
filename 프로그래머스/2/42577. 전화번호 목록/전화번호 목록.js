function solution(phone_book) {
  phone_book.sort(); // sort()메서드를 통하여 접두어가 비슷한 단어들이 양 옆에 오도록 설정

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }
  return true;
}
