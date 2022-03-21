import React, { useState, useRef } from 'react';
import usePokemonList from '../hooks/usePokemonList';
import useViewPokemon from '../hooks/useViewPokemon';
import Pokemon from '../components/Pokemon';
import ErrorImage from '../components/ErrorImage';
import '../assets/styles/containers/Pokedex.scss';

const Pokedex = () => {
    
    const [region, setRegion] = useState("First 9 Pokémons on National ");
    const [regionImg, setRegionImg] = useState("https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20180712231931/Mapa_de_Kanto_LGPE.png");

    const [limit, setLimit] = useState(9);
    const [offset, setOffset] = useState(0);

    const handleRegionKanto = () => {
        setRegion("Kanto");
        setRegionImg("https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20180712231931/Mapa_de_Kanto_LGPE.png");
        setLimit(151);
        setOffset(0);
    };
    const handleRegionJhoto = () => {
        setRegion("Jhoto");
        setRegionImg("https://images.wikidexcdn.net/mwuploads/wikidex/f/fe/latest/20180203062443/Johto_HGSS.png");
        setLimit(100);
        setOffset(151);
    };
    const handleRegionHoenn = () => {
        setRegion("Hoenn");
        setRegionImg("https://images.wikidexcdn.net/mwuploads/wikidex/a/af/latest/20150228012617/Mapa_de_Hoenn_ROZA.png");
        setLimit(135);
        setOffset(251);
    };
    const handleRegionSinnoh = () => {
        setRegion("Sinnoh");
        setRegionImg("https://images.wikidexcdn.net/mwuploads/wikidex/d/d2/latest/20210825190744/Sinnoh_DBPR.png");
        setLimit(107);
        setOffset(386);
    };
    const handleRegionTeselia = () => {
        setRegion("Teselia");
        setRegionImg("https://images.wikidexcdn.net/mwuploads/wikidex/2/29/latest/20160818015101/Teselia_N2B2.png");
        setLimit(156);
        setOffset(493);
    }
    const handleRegionKalos = () => {
        setRegion("Kalos");
        setRegionImg("https://images.wikidexcdn.net/mwuploads/wikidex/0/05/latest/20160917035956/Mapa_Kalos.png");
        setLimit(72);
        setOffset(649);
    }
    const handleRegionAlola = () => {
        setRegion("Alola");
        setRegionImg("https://images.wikidexcdn.net/mwuploads/wikidex/6/6c/latest/20160602144055/Alola.png");
        setLimit(88);
        setOffset(721);
    }
    const handleRegionGalar = () => {
        setRegion("Galar");
        setRegionImg("https://images.wikidexcdn.net/mwuploads/wikidex/4/41/latest/20190227161647/Galar.png");
        setLimit(89);
        setOffset(809);
    }
    
    
    const API = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}}&offset=${offset}`;
    const pokemonDefinitiveList = usePokemonList(API);
    const Capitalize= (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const [pokemonVisualize, setPokemonVisualize] = useState(['bulbasaur']);
    const handlePokVis = (pok) => {
        setPokemonVisualize(pok);
    }

    const visualize = useViewPokemon(pokemonVisualize);

    return (
        <section className="Pokedex">
            <section className="Pokedex__changeRegion">
                <h1 className="Pokedex__tittle2">Choose the Region:</h1>
                <section className="Pokedex__buttonsSection">
                    <button 
                        className="Pokedex__button"
                        onClick={handleRegionKanto}
                        type="submit"
                        >Kanto
                    </button>
                    <button
                        className="Pokedex__button"
                        onClick={handleRegionJhoto}
                        type="submit"
                    >Johto</button>
                    <button
                        className="Pokedex__button"
                        onClick={handleRegionHoenn}
                        type="submit"
                    >Hoenn</button>
                    <button
                        className="Pokedex__button"
                        onClick={handleRegionSinnoh}
                        type="submit"
                    >Sinnoh</button>
                    <button 
                        className="Pokedex__button"
                        onClick={handleRegionTeselia}
                        type="submit"
                    >Teselia</button>
                    <button 
                        className="Pokedex__button"
                        onClick={handleRegionKalos}
                        type="submit"
                    >Kalos</button>
                    <button 
                        className="Pokedex__button"
                        onClick={handleRegionAlola}
                        type="submit"
                    >Alola</button>
                    <button 
                        className="Pokedex__button"
                        onClick={handleRegionGalar}
                        type="submit"
                    >Galar</button>
                </section>
                <picture>
                    <img 
                        className="Pokedex__RegionImg"
                        src= {regionImg}
                    />
                </picture>
            </section>
            <h1 className="Pokedex__tittleRegion">{region} Pok&eacute;Dex:</h1>
            <section className="Pokedex__main__section">
                <section className='Pokedex__main__section__function'>
                    {pokemonDefinitiveList.map(pokemon =>(
                        <section className="Pokedex__section" key={pokemon.name}>
                            <h1 className="Pokedex__tittle">{Capitalize(pokemon.name)}</h1>
                            <picture 
                                className="Pokedex__picture"
                                onClick={() => handlePokVis(pokemon.name)}
                            >
                                <img
                                    className="Pokedex__img"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDefinitiveList.indexOf(pokemon)+1+offset}.png`}/>
                            </picture>
                        </section> 
                    ))}
                </section>
            </section>
            {visualize.map(items =>(
                <Pokemon className="Pokemon"key={items.id}>
                    <section className='Pokemon__header'>
                        <h1 className="Pokemon__mainTittle">{Capitalize(items.name)}</h1>
                        <h1 className="Pokemon__mainTittle">ID: {' '}{items.id}</h1>
                        
                            {   (items.types[1]) ?
                                <h1 className="Pokemon__tittle__type">Types:</h1>
                                :
                                <h1 className="Pokemon__tittle__type">Type:</h1>
                            }
                        <section className='Pokemon__types'>    
                            <h1 className={(items.types[0].type.name) + " Pokemon__types__h1"}>
                                {Capitalize(items.types[0].type.name)} 
                            </h1>
                            {
                                (items.types[1] ?
                                <h1 className={(items.types[1].type.name) + " Pokemon__types__h1"}>
                                    {Capitalize(items.types[1].type.name)}
                                </h1>
                                :null)
                            }
                            {   
                                items.types[0].type.name == 'Grass' ? console.log(type1) :null
                            }
                            
                        </section>

                    </section>
                    <section className='Pokemon__main__description_and_statistics'>
                        <section className="Pokemon__description">
                            <section className="Pokemon__description__1">
                                <section className='Pokemon__description__1__weight'>
                                    <h1 className="Pokemon__h1">Weight:</h1>
                                    <p className='Pokemon__p'>{(items.weight)/10}{' '}kg || {((items.weight)/10*2.20462).toFixed(2)}{' '}lb</p>
                                </section>
                                <section className='Pokemon__description__1__height'>
                                    <h1 className="Pokemon__h1">Height:</h1>
                                    <p className='Pokemon__p'>{(items.height)/10}{' '}mts || {(items.height*0.328084).toFixed(2)}{' '}ft</p>
                                </section>
                                
                            </section>

                            <section className="Pokemon__description__2">
                                <h1 className="Pokemon__h1">Abilities:</h1>
                                <p className="Pokemon__p">- {' '}{Capitalize(items.abilities[0].ability.name)}</p>
                                {
                                    (items.abilities[1] ?
                                    <p className="Pokemon__p">- {' '}{Capitalize(items.abilities[1].ability.name)}</p>
                                    :null)
                                }
                            </section>
                        </section>    
                        <section className='Pokemon__statistics'>
                            <h1 className="Pokemon__h1__statistics">Statistics:</h1>
                            <section className='Pokemon__statistics__section'>
                                <h1 className="Pokemon__h1">Base Health</h1>
                                <p className='Pokemon__p'>:{' '}{items.stats[0].base_stat}</p>
                            </section>
                            <section className='Pokemon__statistics__section'>
                                <h1 className="Pokemon__h1">Base Experience</h1>
                                <p className='Pokemon__p'>:{' '}{items.base_experience}</p>
                            </section>
                            <section className='Pokemon__statistics__section'>
                                <h1 className="Pokemon__h1">Base Attack</h1>
                                <p className='Pokemon__p'>:{' '}{items.stats[1].base_stat}</p>
                            </section>
                            <section className='Pokemon__statistics__section'>
                                <h1 className="Pokemon__h1">Base Defense</h1>
                                <p className='Pokemon__p'>:{' '}{items.stats[2].base_stat}</p>
                            </section>
                            <section className='Pokemon__statistics__section'>
                                <h1 className="Pokemon__h1">Special Attack</h1>
                                <p className='Pokemon__p'>:{' '}{items.stats[3].base_stat}</p>
                            </section>
                            <section className='Pokemon__statistics__section'>
                                <h1 className="Pokemon__h1">Special Defense</h1>
                                <p className='Pokemon__p'>:{' '}{items.stats[4].base_stat}</p>
                            </section>
                            <section className='Pokemon__statistics__section'>
                                <h1 className="Pokemon__h1">Speed</h1>
                                <p className='Pokemon__p'>:{' '}{items.stats[5].base_stat}</p>
                            </section>
                            
                        </section>
                    </section>
                    <section className="Pokemon__images">
                        <section className='Pokemon__images__block'>
                            <h1 className="Pokemon__images__h1">Front view:</h1>
                            {
                                (items.sprites.front_default ?
                                    <picture>
                                        <img className="Pokemon__images__block__img" src={items.sprites.front_default}/>
                                    </picture>
                                :
                                    <ErrorImage/>
                                )
                            } 
                        </section>

                        <section className='Pokemon__images__block'>
                            <h1 className="Pokemon__images__h1">Back view:</h1>
                            {
                                (items.sprites.back_default ?
                                    <picture>
                                        <img className="Pokemon__images__block__img" src={items.sprites.back_default}/>
                                    </picture>
                                :
                                    <ErrorImage/>
                                )
                            }
                        </section>

                        <section className='Pokemon__images__block'>
                            <h1 className="Pokemon__images__h1">Front Shiny:</h1>
                            {
                                (items.sprites.front_shiny ?
                                    <picture>
                                        <img className="Pokemon__images__block__img" src={items.sprites.front_shiny}/>
                                    </picture>
                                :
                                    <ErrorImage/>
                                )
                            }
                        </section>

                        <section className='Pokemon__images__block'>
                            <h1 className="Pokemon__images__h1">Back Shiny:</h1>
                            {
                                (items.sprites.back_shiny ?
                                    <picture>
                                        <img className="Pokemon__images__block__img" src={items.sprites.back_shiny}/>
                                    </picture>
                                :
                                    <ErrorImage/>
                                )
                            }
                            
                        </section>
                    </section>
                </Pokemon>          
            ))}
        </section>     
    );
}

export default Pokedex;
