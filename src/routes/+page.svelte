
<script lang="ts">
	import type { PageData } from './$types';
  import Card from '../components/Card.svelte';
	
	export let data: PageData;
</script>

<h2>Movie Watchlist</h2>

  <div class="watchlist">
    {#each data.results as movie (movie.id)}
    <Card {movie} />
  {/each}
  </div>

<style>
  h2 {
    padding: 0 1rem;
  }

  .watchlist {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 1rem;
    row-gap: 2rem;
  }
</style>

