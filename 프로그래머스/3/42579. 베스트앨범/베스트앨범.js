
function solution(genres, plays) {
  var answer = [];
  const obj = {};

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (obj[genre]) {
      obj[genre] += play;
    } else {
      obj[genre] = play;
    }
  }

  const sortedGenres = Object.entries(obj).sort((a, b) => b[1] - a[1]); // 재생 횟수를 기준으로 정렬

  for (const [genre] of sortedGenres) {
    const songs = [];

    for (let i = 0; i < genres.length; i++) {
      if (genres[i] === genre) {
        songs.push([i, plays[i]]);
      }
    }

    songs.sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0] - b[0]; // 재생 횟수가 같으면 고유 번호가 낮은 순서로 정렬
      }
      return b[1] - a[1]; // 재생 횟수 내림차순 정렬
    });

    answer.push(songs[0][0]); // 가장 많이 재생된 노래 추가
    if (songs.length > 1) {
      // 두 번째로 많이 재생된 노래 추가
      answer.push(songs[1][0]);
    }
  }

  return answer;
}