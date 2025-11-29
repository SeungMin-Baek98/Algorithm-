// function solution(phone_book) {
//   var answer = true;
//   const firstIdx = phone_book.shift();

//   for (let i = 0; i < phone_book.length; i++) {
//     if (phone_book[i].includes(firstIdx)) {
//       answer = false;
//     }
//   }
//   return answer;
// }

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}
