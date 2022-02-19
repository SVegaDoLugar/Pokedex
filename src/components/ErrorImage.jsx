import React from 'react';
import '../assets/styles/components/ErrorImage.scss'
const ErrorImage = () => {
    const pokeBallImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/902px-Pokebola-pokeball-png-0.png";
    return (
        <section className='ErrorImage'>
            <picture>
                <img className='ErrorImage__pokeBallImg' src={pokeBallImg}/>
            </picture>
            <h1 className='ErrorImage__h1'>Sorry, there's no image for this section on the API V2.</h1>
        </section>
    );
}

export default ErrorImage;