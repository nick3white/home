import { component$ } from "@builder.io/qwik";

export interface SearchProps {
  search: string[];
}

export const Search = component$<SearchProps>(({ search }) => {
  return (
    <form action={search[0]} method="get">
      <input name="search" />
      <button type="submit">{search[1]}</button>
    </form>
  );
});
