// function solution(s) {
//   let answer = 0;
//   const arr = s.split(" ");

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "Z") {
//       answer -= +arr[i - 1];
//     } else {
//       answer += +arr[i];
//     }
//   }

//   return answer;
// }


function solution(s) {
  const arr = [];
  const str = s.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] === "Z" ? arr.pop() : arr.push(+str[i]);
  }

  return arr.length ? arr.reduce((acc, cur) => acc + cur) : 0;
}
