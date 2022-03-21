import React from 'react';
import {Helmet} from 'react-helmet';
import '../assets/styles/components/Header.scss';
const Header = () => {
    return (
        <>
            <Helmet>
                <meta property='og:url' content='SVegaDoLugar.github.io'/>
                <meta property='og:site_name' content='National Pokedex' />
                <meta property='og:locale' content='en_EN'/>
            </Helmet>
            <header className="Header">
                <picture className="Header__picture">
                    <img className='Header__img'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"/>
                </picture>
                <h1 className='Header__Title'>National Pok&eacute;Dex by Region</h1>
            </header>
        </>
    );
}

export default Header;