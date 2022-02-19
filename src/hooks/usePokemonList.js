import { useEffect, useState } from 'react'
const usePokemonList = url => {
    const [pokemonList, setpokemonList] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setpokemonList(data.results))
    }, [url]);

    return pokemonList;
}
export default usePokemonList;
