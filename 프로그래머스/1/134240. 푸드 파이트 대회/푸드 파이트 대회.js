function solution(food) {
  let str = "";
  var answer = "";

  for (let i = 0; i < food.length; i++) {
    str += String(i).repeat(Math.floor(food[i] / 2));
  }

  return (answer += str + "0" + str.split("").reverse().join(""));
}