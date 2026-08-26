function solution(bridge_length, weight, truck_weights) {
  // 1. 다리 길이 만큼의 배열 생성해서 0으로 채움
  const bridge = Array.from({ length: bridge_length }).fill(0);

  let currentBridgeWeight = 0; // 2.다리를 건널 수 있는 최대 무게
  let time = 0; // 3. 시간

  // 4. 트럭무게 배열로만 가지고는 판단할 수없다
  // -> 마지막 트럭이 다리에 올라가는 순간 반복문 종료 되기 때문에
  // 5. 둘 조건이 모두 참일 경우에 반복문 종료
  while (truck_weights.length > 0 || currentBridgeWeight > 0) {
    time++;
    // 6. 다리위에서 빠져나간 트럭
    const exitedTruck = bridge.shift();
    // 7. 다리위에서 빠져나갔으므로 현재 다리 무게 최신화
    currentBridgeWeight -= exitedTruck;
    // 8. 대기중인 트럭 첫번째 요소 꺼냄 <- 비교를 위해서 임시로 꺼냄
    const truck = truck_weights[0];
    // 9. 다리에 올라갈 수 있는지 판단
    const isPossibleToPassBridge = truck + currentBridgeWeight <= weight;

    if (isPossibleToPassBridge) {
      // 10. 트럭대기열에서 첫번째요소 꺼냄
      const truckWeight = truck_weights.shift();
      // 11. 다리위에 올라감
      bridge.push(truckWeight);
      // 12. 현재 다리무게에 더함
      currentBridgeWeight += truckWeight;
    } else {
      // 13. 올라갈 수 없다면 다리에 0 푸시 <- 이것도 시간에 포함하기 위해서 포함을 시켜야댐
      bridge.push(0);
    }
  }

  return time;
}
