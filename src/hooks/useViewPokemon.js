import { useEffect, useState } from 'react';
const useViewPokemon = urlPortion => {
    const [viewPokemon, setViewPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${urlPortion}/`)
        .then((res) => res.json())
        .then(data => setViewPokemon([data]))
    }, [urlPortion]);
    
    return viewPokemon;
}

export default useViewPokemon;
//setViewPokemon((data).abilities))
//
