function solution(num_list) {
  let total = 0;

  num_list.forEach((el) => {
    while (el !== 1) {
      if (el % 2 === 0) {
        total++;
        el /= 2;
      } else {
        el -= 1;
      }
     
    }
  });

  return total;
}
