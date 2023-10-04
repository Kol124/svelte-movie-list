import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWIxMGU1ZTI1MTJiMjg3NWRmMzhmMWRlOWQ1N2MyMyIsInN1YiI6IjYwNWEwNTM5YjM5ZTM1MDAyOGY2MDA2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Y5zaQYtgm4nR6wezU8W8XhVHc3bZV_0isdshtdvfrs",
  },
};

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    options
  );

  const data = await res.json();

  if (!data) throw error(404);

  return data;
};
