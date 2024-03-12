import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const usePokemonFetch = () => {
  const [input, setInput] = useState("");

  const output = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const urls = [
        `https://pokeapi.co/api/v2/pokemon/${input}`,
        `https://pokeapi.co/api/v2/pokemon-species/${input}`,
      ];
      const fetchRequests = urls.map((url) =>
        fetch(url).then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
      );
      // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      const results = await Promise.all(fetchRequests);
      return {
        pokemon: results[0],
        species: results[1],
      };
    },
    enabled: false,
    // placeholderData: keepPreviousData,
  });

  return { input, setInput, ...output };
};
export default usePokemonFetch;
