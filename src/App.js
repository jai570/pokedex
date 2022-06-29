import { useState } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import axios from "axios";
// import Hooks from "./hooksprt/Hooks";

function App() {
  const [pokemonname, setpokemonname] = useState("");
  const [chosed, setchosed] = useState(false);
  const [pokemon, setpokemon] = useState({
    name: "",
    moves: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });
  const searchPokemon = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonname}`
    );
    setpokemon({
      name: data.name,
      img: data.sprites.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      type: data.types[0].type.name,
    });
    // console.log(data.moves.slice(0, 2))
    setchosed(true);
  };
  return (
    <div className="App">
      <div className="title">
        <h1>Pokemon status</h1>
        <input
          type="text"
          placeholder="Search a Pokemon to choose..."
          onChange={(e) => setpokemonname(e.target.value)}
        />
        <button onClick={searchPokemon}>Choose</button>
      </div>
      {!chosed ? (
        <h1>Please choose a pokemon</h1>
      ) : (
        <div className="displaysection">
          <div className="imagesec">
            <img src={pokemon.img} alt={pokemon.name} width="100%" />
          </div>
          <div className="details">
            <h1 style={{ marginBottom: "10px" }}>
              {pokemon.name.toUpperCase()}
            </h1>
            <h2> HP: {pokemon.hp}</h2>
            <h2>Attack: {pokemon.attack}</h2>
            <h2>Defense: {pokemon.defense}</h2>
            <h2>Speed: {pokemon.speed}</h2>
            <h2>Type: {pokemon.type}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
