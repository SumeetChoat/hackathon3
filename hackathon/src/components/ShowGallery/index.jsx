import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShowGallery() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemonList(data.results); // Update to store the results array
    }

    fetchPokemon();
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon, index) => ( // Renamed the variable to avoid conflict
        <Link to={`/${index + 1}`} key={index}> {/* Using index as key is fine since the order is static */}
          <div>
            <p>{pokemon.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
