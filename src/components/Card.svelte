<script lang="ts">
  type MovieType = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: number,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }

  export let movie: MovieType
</script>

<div class="movie-card">
  <a href={`/movie/${movie.id}`}>
    <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.title} />
  </a>

  <div class="description">
    <h2>{movie.title}</h2>
    <p>{movie.release_date}</p>
  </div>
</div>



<style>
  /* .movie-poster {
    
  } */

  img {
    width: calc(200px/1.5);
    min-width: calc(200px/1.5);
    height: 200px;
    border-radius: 0.5rem;
  }

  h2 {
    font-size: 0.9rem;
    line-height: 5px;
  }

  .description {
    height: 5vh
  }

  p {
    font-size: 0.7rem;
  }

  .movie-card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
  }
</style>
