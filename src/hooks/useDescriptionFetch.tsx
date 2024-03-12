import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useDescriptionFetch = () => {
  const [input, setInput] = useState("");

  const description = useQuery({
    queryKey: ["pokemon-species"],
    queryFn: async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${input}`
      );
      const result = await res.json();
      return await result;
    },
    enabled: false,
  });

  return { input, setInput, ...description };
};
export default useDescriptionFetch;
