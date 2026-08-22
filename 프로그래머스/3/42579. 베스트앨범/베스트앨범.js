function solution(genres, plays) {
  // 배열 생성 ->
  const songInfo = {};
  const result = [];

  for (let i = 0; i < genres.length; i++) {
    // 각 재생횟수의 합을 담은 객체 생성 -> 왜? -> 비교군이 필요함.
    const genre = genres[i];
    const play = plays[i];

    if (!songInfo[genre]) {
      songInfo[genre] = {
        totalPlay: 0,
        play: {},
      };
    }

    songInfo[genre].totalPlay += play;
    songInfo[genre].play[i] = play;
  }
  const sortedObj = Object.entries(songInfo).sort(
    ([, a], [, b]) => b.totalPlay - a.totalPlay,
  );

  for (const [genre, data] of sortedObj) {
    const sortedPlay = Object.entries(data.play).sort(
      ([indexA, playA], [indexB, playB]) => {
        if (playA !== playB) return playB - playA;

        return Number(indexA) - Number(indexB);
      },
    );

    for (const [index, play] of sortedPlay.slice(0, 2)) {
      result.push(+index);
    }
  }

  return result;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500],
  ),
);
