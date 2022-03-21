import React, { useEffect, useState } from 'react';
import Layout from '../containers/Layout';
import Pokedex from '../containers/Pokedex';

const Home = () => {
    
    return (
        <Layout>
            <Pokedex/>
        </Layout>
    );
}

export default Home;