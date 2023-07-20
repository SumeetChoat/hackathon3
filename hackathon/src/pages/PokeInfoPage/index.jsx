import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokeInfoPage() {
  const {id} = useParams();
    const [show, setShow] = useState({});

    useEffect(() => {
        async function displayShow() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setShow(data);
        }

        displayShow();

    }, [])

    return (
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
          <h2>Name: {show.name}</h2>
          <h2>Height: {show.height}</h2>
          <h2>Weight: {show.weight}</h2>
      </div>
    )
}
