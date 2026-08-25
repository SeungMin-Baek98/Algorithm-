function solution(genres, plays) {
  const songInfoObj = {};
  const result = [];
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!songInfoObj[genre]) {
      songInfoObj[genre] = {
        totalPlay: 0,
        songs: {},
      };
    }

    songInfoObj[genre].totalPlay += play;
    songInfoObj[genre].songs[i] = play;
  }
  const sortedByTotalPlay = Object.entries(songInfoObj).sort(
    ([genreA, dataA], [genreB, dataB]) => dataB.totalPlay - dataA.totalPlay,
  );

  for (const [genre, data] of sortedByTotalPlay) {
    const sortedBySongPlay = Object.entries(data.songs).sort(
      ([songIdxA, songPlayA], [songIdxB, songPlayB]) => {
        if (songPlayA === songPlayB) return songIdxA - songIdxB;

        return songPlayB - songPlayA;
      },
    );

    for (const [idx, play] of sortedBySongPlay.slice(0, 2)) {
      result.push(idx);
    }
  }

  return result.map((item) => +item);
}