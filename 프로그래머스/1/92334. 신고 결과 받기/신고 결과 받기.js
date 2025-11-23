function solution(id_list, report, k) {
  const reportSet = [...new Set(report)]; // 한 유저가 여러번 신고한 경우 중복제거
  const reportCount = {}; // 각 유저별 신고당한 카운트를 저장하는 객체
  const reporterMap = {}; // 각 유저가 신고한 사람들을 저장하는 객체

  // 신고 관계 파싱
  for (const req of reportSet) {
    const [reporter, reported] = req.split(" ");

    // 신고당한 횟수 카운트
    reportCount[reported] = (reportCount[reported] || 0) + 1;

    // 신고한 사람 기록
    if (!reporterMap[reporter]) {
      reporterMap[reporter] = [];
    }
    reporterMap[reporter].push(reported);
  }

  // 정지된 유저 목록
  const suspended = Object.keys(reportCount).filter(
    (user) => reportCount[user] >= k
  );

  // 각 유저별 메일 발송 횟수 계산
  return id_list.map((id) => {
    if (!reporterMap[id]) return 0;
    return reporterMap[id].filter((reported) => suspended.includes(reported))
      .length;
  });
}
