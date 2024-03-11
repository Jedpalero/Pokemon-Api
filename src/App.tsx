import LandingPage from "./components/LandingPage";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    // <div className="grid grid-cols-[600px_1fr] w-[100%] h-screen viewport">
    <div className="viewport">
      <div className="input">
        <Pokemon />
      </div>
      <div className="landing bg-pokeball bg-no-repeat bg-cover bg-center">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
