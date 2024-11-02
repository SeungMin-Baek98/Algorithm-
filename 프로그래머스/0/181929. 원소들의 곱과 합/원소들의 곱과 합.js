function solution(num_list) {
 const sum = num_list.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
const multi = num_list.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});

const totalSum = sum * sum;

const result = multi < totalSum ? 1 : 0;
    return result
}