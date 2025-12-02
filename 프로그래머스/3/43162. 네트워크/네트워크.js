function dfs(graph, visited, node) {
  visited[node] = true; // 현재 노드를 방문 처리

  for (let i = 0; i < graph[node].length; i++) {
    if (!visited[i] && graph[node][i] !== 0) {
      dfs(graph, visited, i);
    }
  }
}

function solution(n, computers) {
  let answer = 0;
  const visited = Array.from({ length: n }).fill(false);

  // 모든 컴퓨터를 순회하며 방문하지 않은 컴퓨터부터 DFS 시작
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(computers, visited, i);
      answer++; // 연결된 네트워크 개수 증가
    }
  }

  return answer;
}
