function solution(skill, skill_trees) {
  var answer = 0;

  // 1. skill의 각 index를 저장 C -> 0 B -> 1 D -> 2
  const obj = {};
  for (let i = 0; i < skill.length; i++) {
    obj[skill[i]] = i;
  }

  // 2. skill_trees각 요소들을 CBD의 글자로만 변환한다음 join()사용해서 그떄의 index를 비교
  const newArr = skill_trees.map((el) => {
    const arr = el
      .split("")
      .filter((e) => skill.includes(e))
      .map((e) => obj[e]);
    return arr;
  });

  // 3. newArr의 각 요소가 0,1,2의 순서로 되어있는지 확인
  for (let i = 0; i < newArr.length; i++) {
    let flag = true;
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j] !== j) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }

  // 4. answer 반환
  return answer;
}
