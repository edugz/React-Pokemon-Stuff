import React from "react";

const PokemonEntry = (props) => {
  return (
    <div className="entryContainer">
      <h2 className="pokeName">{props.name} </h2>
      <img className="pokeImg" src={props.sprite} />
      <p className="pokeMove">Signature move: </p>
      <p className="pokeMove">{props.signMove}</p>
    </div>
  );
};

export default PokemonEntry;
