import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [searchString, setSearchString] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchPokemon = string => {
    "check if input is a string or event, overwrite if event";
    setLoading(true);
    if (typeof string != "string") {
      string = searchString;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/` + string)
      .then(res => res.json())
      .then(obj => {
        // console.log(obj);
        setPokemon(obj);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // create a use effect that loads one pokemon when we open the webpage.
    // then the user can request new ones.
    console.log("this runs");
    fetchPokemon("pikachu");
    "start the app with a pokemon loaded."
  "you can write on large string "
   " over multiple lines "
  }, []);

  return (
    <>
      {loading && <h1>LOADING</h1>}
      <h3>UseEffect and Fetch requests</h3>
      <input
        onChange={e => {
          console.log(e.target.value);
          setSearchString(e.target.value);
        }}
      ></input>
      <div className="card">
        <button onClick={fetchPokemon}>
          Whats in the ball?: {pokemon.name}
        </button>
      </div>
      {pokemon.name ? (
        <>
          <div>{pokemon.name}</div>
          <div>{pokemon.types.map(item => `${item.type.name}, `)}</div>
          <img src={pokemon.sprites.front_default} />
          <div>pokemon.upgrade</div>
        </>
      ) : (
        "Get a Pokemon above"
      )}
      <p className="about">
        fetch is an promise function; it runs asynchronously and calls an
        internal resolve function when it is done and successful, and a reject
        function when it is not successful for whatever reason determined
        internally
        <br />
        UseEffects are ran when a component is first mounted. A component is
        "mounted" when it loads for the first time.
      </p>
    </>
  );
}

export default App;
