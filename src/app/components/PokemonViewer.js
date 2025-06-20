"use client";

import { useEffect, useState } from "react";

export default function PokemonViewer() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  if (!pokemon) {
    return <div>Cargando pokemonsitos...</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 10 }}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>
        <strong> Altura: </strong>
        {pokemon.height}
      </p>
      <p>
        <strong> Peso: </strong>
        {pokemon.weight}
      </p>
      <p>
        <strong>Tipo:</strong>{" "}
        {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>
    </div>
  );
}
