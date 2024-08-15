# Algorithm_Baekjoon

자바스크립트(ES6)를 공부하면서 배운 개념들을 감을 익히고자 알고리즘을 택하였습니다.

## 문제 풀이 방법

- 백준은 `JavaScript`로 제출하는 조건이 없다. 그래서 `node.js`를 이용해 입출력을 관리하여 문제를 제출해야 한다.

1. 예시가 작성된 txt 파일의 내용을 변수로 가져와서
2. 해당 변수를 배열 또는 객체로, 사용하기 편한 자료형으로 변형해
3. 문제의 요구사항을 충족하도록 코드를 작성하고
4. 마지막에는 console.log() 로 반환해 주면 된다

- CASE 1. 입력 값이 한 줄 일 때
  ```javascript
  const fs = require("fs");
  const input = readFileSync("/dev/stdin").toString().split(" ");
  ```
- CASE 2. 입력 값이 여러 줄 일 때
  ```javascript
  const fs = require("fs");
  const input = readFileSync("/dev/stdin").toString().trim().split("\n");
  ```
  - [출처: Ryung Log:티스토리](https://s-ryung.tistory.com/33)
