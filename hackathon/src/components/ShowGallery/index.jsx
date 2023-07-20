import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShowGallery() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemonList(data.results); 
    }

    fetchPokemon();
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon, index) => ( 
        <Link to={`/pokepage/${index + 1}`} key={index}> 
          <div>
            <p>{pokemon.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
