import React from 'react';
import Layout from '../containers/Layout';
import '../assets/styles/NotFound.scss';
const NotFound = () => {
    return (
        <Layout>
            <section className='NotFound'>
                <h1 className='NotFound__h1'>Page not found</h1>
                <picture className='NotFound__picture'>
                    <img className='NotFound__img 'src="https://images.wikidexcdn.net/mwuploads/wikidex/6/66/latest/20190806020657/Pikachu_en_la_primera_generaci%C3%B3n.png"/>
                </picture>
            </section>
        </Layout>
    );
}

export default NotFound;