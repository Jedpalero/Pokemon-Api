import Loader from "./Loader";
import pokedex from "../assets/pokedex.png";
import display from "../assets/screen.jpg";
import usePokemonFetch from "../hooks/usePokemonFetch";
import "../index.css";
// import Button from "./Button";

const Pokemon = () => {
  const { data, isError, isFetching, isLoading, refetch, setInput } =
    usePokemonFetch();

  const handleSubmit = async () => {
    refetch();
  };

  const img: string = data?.sprites.other.showdown.front_default;

  return (
    <div className="flex">
      <img src={pokedex} alt="pokedex" className="pokedex" />
      <span className="loading">
        {isFetching || isLoading ? <Loader /> : null}
      </span>
      <div className="search">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value.toLowerCase())}
          id="pokemon"
          placeholder="Enter Pokemon..."
          autoComplete="on"
          className="inputField"
        />
        <button onClick={handleSubmit} className="buttonStyle">
          <span className="animated"></span>
        </button>
      </div>
      <>
        {!data ? (
          <>
            {isError ? (
              <h1 className="errorTextScreen errorCont">
                No pokemon match name, check your spelling...
              </h1>
            ) : (
              <div className="screen">
                <img src={display} alt="display" className="screenImg" />
                Search pokemon...
              </div>
            )}
          </>
        ) : (
          <>
            <div className="errorCont">
              {isError ? (
                <h1 className="errorText">
                  No pokemon match name, check your spelling...
                </h1>
              ) : (
                <img src={img} alt="pokemon-gif" className="imgGIF" />
              )}
            </div>
          </>
        )}
      </>
      {/* {data ? <Button /> : null} */}
    </div>
  );
};

export default Pokemon;
