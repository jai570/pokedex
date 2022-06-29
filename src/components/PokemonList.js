import React from "react";

const PokemonList = ({ data }) => {
  return (
    <div>
      {data.map((pokemon) => (
        <h1 key={pokemon}>{pokemon}</h1>
      ))}
    </div>
  );
};

export default PokemonList;
