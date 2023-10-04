import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWIxMGU1ZTI1MTJiMjg3NWRmMzhmMWRlOWQ1N2MyMyIsInN1YiI6IjYwNWEwNTM5YjM5ZTM1MDAyOGY2MDA2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Y5zaQYtgm4nR6wezU8W8XhVHc3bZV_0isdshtdvfrs",
  },
};

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/account/10261598/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc",
    options
  );

  const data = await res.json();

  if (!data) throw error(res.status, `${res.statusText}`);

  return data;
};
