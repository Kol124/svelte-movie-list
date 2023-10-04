<script lang="ts">
	import type { PageData } from './$types';

  //   type Details = {
  //   status: "Released",
  //   tagline: "No way back, one way out.",
  //   title:  "John Wick: Chapter 4",
  //   video: false
  // }
	
	export let data: PageData;

  // console.log(data)
</script>

<div class="movie-details">
  <img src={`https://image.tmdb.org/t/p/w500` + data.poster_path} alt={data.title}>

  
  <div class="description">
    <h1>{data.title}</h1>
    <p>{data.overview}</p>
    <h4>{data.status} {data.release_date}</h4>

    <p>
      Genres:
      {#each data.genres as genre }
        <span>{`${genre.name}${data.genres.length > 1 ? ', ': ''}`}</span>
      {/each}
    </p>
  </div>
</div>

<style>
  .movie-details {
    display: flex;
    gap: 1rem;
  }

  img {
    width: calc(400px/1.5);
    min-width: calc(400px/1.5);
    height: 400px;
  }
</style>