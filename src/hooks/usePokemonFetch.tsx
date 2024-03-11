import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const usePokemonFetch = () => {
  const [input, setInput] = useState("");

  const output = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      const result = await res.json();
      return await result;
    },
    enabled: false,
    // placeholderData: keepPreviousData,
  });

  return { input, setInput, ...output };
};
export default usePokemonFetch;
