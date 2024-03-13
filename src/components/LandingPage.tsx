import { ColorProps, backgroundColors } from "../hooks/colorType";
import usePokemonFetch from "../hooks/usePokemonFetch";
import pokeball from "../assets/pokeball.png";
import "../index.css";
import { FaRuler, FaWeightHanging } from "react-icons/fa";

type abilities = {
  ability: {
    name: string;
  };
};

type types = {
  type: {
    name: string;
  };
};

type statsProps = {
  base_stat: string;
  stat: {
    name: string;
  };
};

const LandingPage = () => {
  const { data } = usePokemonFetch();

  const name: string = data?.pokemon.name;
  const id: string = data?.pokemon?.id;
  const types = data?.pokemon?.types[0].type.name as keyof ColorProps;
  const description: string = data?.species?.flavor_text_entries[0].flavor_text;
  const weight = data?.pokemon?.weight;
  const height = data?.pokemon?.height;
  const moves = data?.pokemon?.abilities;
  const stats = data?.pokemon?.stats;

  const str = "" + id;
  const pad = "000";
  const ids = pad.substring(0, pad.length - str.length) + str;

  return (
    <div className="flex">
      {data && (
        <>
          <div
            className="card1 drop-shadow-xl"
            style={{
              backgroundColor: data ? backgroundColors[types] : "white",
            }}
          >
            <h1 className="absolute p-5 text-2xl font-bold text-white">
              {name.toUpperCase()}
            </h1>
            <img
              src={pokeball}
              alt="pokeball"
              className="absolute size-[20rem] rotate-12 mt-[10rem] mr-[8rem] shinning"
            />
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ids}.png`}
              alt="image"
              className="size-[280px] mt-10 z-10 drop-shadow-xl"
            />
            <h1 className="p-6 absolute right-0 bottom-0 text-white">#{ids}</h1>
          </div>
          <div className="card2 text-right p-10 space-y-4">
            <h1 className="text-2xl font-bold">About</h1>
            <>
              <span className="flex items-center justify-end gap-3">
                <FaWeightHanging />
                {weight} kg | weight
              </span>
              <span className="flex items-center justify-end gap-3">
                <FaRuler />
                {height * 10} cm | height
              </span>
              <span className="flex items-center justify-end gap-3 pb-5">
                {moves?.map((move: abilities, index: number) => (
                  <i key={index}>{move.ability.name}</i>
                ))}
                | moves
              </span>
              {data?.pokemon.types.map((t: types, index: number) => (
                <span
                  key={index}
                  className="text-white pr-4 pl-4 p-2 rounded-full mr-1"
                  style={{ backgroundColor: backgroundColors[t.type.name] }}
                >
                  {t.type.name}
                </span>
              ))}
            </>
            <p className=" text-center pt-[1rem]">{description}</p>
            {stats?.map((item: statsProps, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-gray-700">{item.stat.name}</span>
                <span className="text-gray-700">{item.base_stat}</span>
                <div className="flex-1 h-2 bg-gray-200">
                  <div
                    className="h-2 bg-orange-500"
                    style={{
                      width: `${
                        item.base_stat > "100" ? "100" : item.base_stat
                      }%`,
                      backgroundColor: backgroundColors[types],
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
