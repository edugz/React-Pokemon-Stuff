import React from "react";
import PokemonList from "../public/PokemonList";
import CreateEntry from "./CreateEntry";

function App() {
  return (
    <div>
      <h1>My Favorite Pokémon</h1>
      <ul className="myList">{PokemonList.map(CreateEntry)}</ul>
    </div>
  );
}

export default App;
