import React from 'react';
import '../assets/styles/components/Pokemon.scss';
const Pokemon = ({children}) => {
    return (
        <section className="Pokemon">
            {children}
        </section>
    );
}

export default Pokemon;