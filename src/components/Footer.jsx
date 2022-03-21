import React from 'react';
import '../assets/styles/components/Footer.scss';
import imgReact from '../assets/images/react.png';
const Footer = () => {
    return (
        <>
            <footer className='Footer'>
                <section className='Footer__section'>
                    <a className='Footer__paragraph' href='https://pokeapi.co/docs/v2'>Pok&eacute; Api</a>
                </section>
                <section className='Footer__section'>
                    <a className='Footer__paragraph' href='https://www.pokemon.com/us/'>Pok&eacute;mon Website</a>
                </section>
                <section className='Footer__section'>
                    <a className='Footer__paragraph' href='https://www.pokemon.com/us/pokemon-tcg/'>Trading card game</a>
                </section>
                <section className='Footer__section'>
                    <a className='Footer__paragraph' href='https://pokemongolive.com/en/'>Pok&eacute;mon GO</a>
                </section>
            </footer>
            <section className='MainFooter'>  
                <section className='Footer2'>
                        <a className='Footer__paragraph' href='https://en.reactjs.org/'>Created with React </a>
                        <picture className="Footer2__imgSpin"><img src={imgReact}/></picture>
                </section>
                <section className='Footer3'>
                        <a className='Footer3__paragraph'>This website is not related to the Pokémon company or Nintendo, it was made with academic purposes.</a>
                </section>
            </section>
        </>
    );
}

export default Footer;