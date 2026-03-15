// function solution(s) {
//   return s
//     .split(" ")
//     .map((word) =>
//       word
//         .split("")
//         .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
//         .join(""),
//     )
//     .join(" ");
// }
function solution(s) {
  let result = "";
  const word = s.split(" "); // 공백으로 split

  for (let i = 0; i < word.length; i++) {
    const wordSplit = word[i].split(""); // 단어 split

    for (let j = 0; j < wordSplit.length; j++) {
      if (j % 2 === 0) {
        wordSplit[j] = wordSplit[j].toUpperCase();
      } else {
        wordSplit[j] = wordSplit[j].toLowerCase();
      }

      result += wordSplit[j];
    }

    if (i !== word.length - 1) {
      result += " ";
    }
  }

  return result;
}
