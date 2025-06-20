"use client";

import { useEffect, useState } from "react";

export default function PokemonViewer() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {

        try{
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
            const data = await res.json();

            const details = await Promise.all(
                data.results.map(p=>fetch(p.url).then(res => res.json()))
                )
            setPokemonList(details);

        }catch (error) {
          console.error("Error fetching Pokémon data:", error);
        }
        
    }
    fetchPokemons();
    }, []);
   


  if (!pokemonList.length) {
    return <div>Cargando pokemonsitos...</div>;
  }

  return (

    <div>
        <h2>Lista de Pokemones</h2>
    
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem',
      }}>
        {pokemonList.map(pokemon => (
            <div key= {pokemon.id} style={{
                border: '1px solid #ccc',
                padding: '10',
                borderRadius: '10',
                textAlign: 'center',
            }}>

                <h4>{pokemon.name.toUpperCase()}</h4>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            </div>

        ))}


   </div>
   </div>
      

  );
}
