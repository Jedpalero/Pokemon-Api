// import { useEffect, useState } from "react";
import { ColorProps, backgroundColors } from "../hooks/colorType";
import usePokemonFetch from "../hooks/usePokemonFetch";
import pokeball from "../assets/pokeball.png";
import "../index.css";

const LandingPage = () => {
  const { data } = usePokemonFetch();
  // const [color, setColor] = useState("white");

  // const name: string = data?.name;
  const id: string = data?.id;
  const types = data?.types[0].type.name as keyof ColorProps;

  const str = "" + id;
  const pad = "000";
  const ids = pad.substring(0, pad.length - str.length) + str;

  // const style = type + " ml-[22rem] h-[30rem] w-[25rem] rounded-xl mt-10";
  // const img: string =
  //   data?.sprites.versions["generation-v"]["black-white"].animated
  //     .front_default;
  // const imgB: string = data?.sprites.front_default;

  // const getColors = () => {
  //   if (types === "water") {
  //     return setColor("#6493eb");
  //   } else if (types === "electric") {
  //     return setColor("#f9cf30");
  //   } else if (types === "fire") {
  //     return setColor("#f57d31");
  //   }
  // };

  // useEffect(() => {
  //   getColors();
  // }, []);

  return (
    <div className="flex">
      <div
        className="card1 drop-shadow-xl"
        style={{ backgroundColor: backgroundColors[types] }}
      >
        <img
          src={pokeball}
          alt="pokeball"
          className="absolute size-[20rem] rotate-12 mt-[10rem] mr-[8rem]"
        />
        <img
          // src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ids}.png`}
          alt="image"
          className="size-[300px] mt-10 z-10 drop-shadow-xl"
        />

        {/* <div className="button cursor-pointer absolute"></div> */}
        {/* {data ? <Button /> : null} */}
      </div>
      <div className="card2"></div>
    </div>
  );
};

export default LandingPage;
