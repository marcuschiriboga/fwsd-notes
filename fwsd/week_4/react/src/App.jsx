import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [searchString, setSearchString] = useState("");
  const [pokemon, setPokemon] = useState({});

  let fetchPokemon = e => {
    console.log(searchString);
    fetch(`https://pokeapi.co/api/v2/pokemon/` + searchString)
      .then(res => res.json())
      .then(obj => {
        // console.log(obj);
        setPokemon(obj);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
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
          {/* <div>pokemon.upgrade</div> */}
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
        UseEffects are ran when a component is first mounted. a compnent is
        "mounted" when it loads for the first time.
      </p>
    </>
  );
}

export default App;
