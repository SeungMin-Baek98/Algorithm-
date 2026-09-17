function solution(genres, plays) {
  const obj = {};

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!obj[genre]) {
      obj[genre] = {
        totalPlay: 0,
        songs: [],
      };
    }

    obj[genre].totalPlay += play;
    obj[genre].songs.push({
      idx: i,
      play,
    });
  }

  const result = [];

  const sortPlay = Object.values(obj).sort((a, b) => b.totalPlay - a.totalPlay);

  for (const { songs } of sortPlay) {
    songs
      .sort((a, b) => b.play - a.play || a.idx - b.idx)
      .slice(0, 2)
      .forEach(({ idx }) => result.push(idx));
  }

  return result;
}