function solution(num_str) {
  return num_str.split('').map(Number).reduce((acc,cur) => {
      return acc + cur
  },0)
}