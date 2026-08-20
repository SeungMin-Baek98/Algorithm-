function solution(genres, plays) {
  const obj = {}; // 장르랑 재생된 노래 수록
  const result = [];
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];

    if (!obj[genre]) {
      obj[genre] = {
        total: 0,
        songs: [],
      };
    }

    obj[genre].total += plays[i];
    obj[genre].songs.push({
      index: i,
      play: plays[i],
    });
  }
  const sortedGenre = Object.entries(obj).sort(
    ([, a], [, b]) => b.total - a.total,
  );

  for (const [genre, data] of sortedGenre) {
    data.songs.sort((a, b) => {
      if (a.play !== b.play) {
        return b.play - a.play;
      }

      return a.index - b.index;
    });

    const selectedSongs = data.songs.slice(0, 2);

    for (const song of selectedSongs) {
      result.push(song.index);
    }
  }

  return result;
}