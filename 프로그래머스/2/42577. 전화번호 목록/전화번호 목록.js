function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    const currentPhoneNum = phone_book[i];

    if (phone_book[i + 1].startsWith(currentPhoneNum)) return false;
  }

  return true;
}
