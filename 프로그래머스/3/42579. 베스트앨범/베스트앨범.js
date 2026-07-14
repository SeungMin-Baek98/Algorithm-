function solution(genres, plays) {
  const obj = {};
  const songs = [];
  const answer = [];
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    obj[genre] = (obj[genre] || 0) + plays[i];

    songs.push({ genre, play: plays[i], index: i });
  }

  const sortedGenre = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  for (const [genre] of sortedGenre) {
    const genreSongs = songs
      .filter((song) => song.genre === genre)
      .sort((a, b) => {
        if (a.play === b.play) return a.play - b.play;
        else return b.play - a.play;
      })
      .slice(0, 2);

    for (const song of genreSongs) {
      answer.push(song.index);
    }
  }

  return answer;
}