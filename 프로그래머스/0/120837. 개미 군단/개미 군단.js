function solution(hp) {
  const generalAnt = 5;
  const byungAnt = 3;
  const workAnt = 1;
  let count = 0;

  while (hp > 0) {
    if (hp >= generalAnt) {
      hp -= generalAnt;
      count++;
    } else if (hp >= byungAnt) {
      hp -= byungAnt;
      count++;
    } else {
      hp -= workAnt;
      count++;
    }
  }

  return count;
}