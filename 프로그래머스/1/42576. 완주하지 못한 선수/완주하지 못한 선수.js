// function solution(participant, completion) {
//   let obj = {};

//   // 참가자 명단을 객체로 만들어서 value값에 1씩 더해준다.
//   for (let i = 0; i < participant.length; i++) {
//     if (obj[participant[i]]) {
//       obj[participant[i]]++;
//     } else {
//       obj[participant[i]] = 1;
//     }
//   }

//   // 완주자 명단을 객체로 만들어서 value값에 이름이 있을경우 완주하였으므로 1씩 뺴준다.
//   for (let i = 0; i < completion.length; i++) {
//     if (obj[completion[i]]) {
//       obj[completion[i]]--;
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] !== 0) {
//       return key;
//     }
//   }
// }


function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    if (map.has(participant[i])) {
      map.set(participant[i], map.get(participant[i]) + 1);
    } else {
      map.set(participant[i], 1);
    }
  }

  for (let i = 0; i < completion.length; i++) {
    map.set(completion[i], map.get(completion[i]) - 1);
  }

  for (let [key, value] of map) {
    if (value > 0) {
      return key;
    }
  }
}