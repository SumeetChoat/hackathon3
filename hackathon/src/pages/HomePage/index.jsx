import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main>
            <img src="src/assets/logo.png"/>
            <h1>Pokemon Library</h1>
            <p>Welcome to the <b>Pokemon Library</b>, where you can find information on all of your favoruite Pokemon!</p>
            <Link to="/pokepage">View our Pokemon</Link>
        </main>
    )
};

export default HomePage;
