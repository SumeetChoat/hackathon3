import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#875053'
  };

const HomePage = () => {
    return (
         <main>
        <h1>Pokemon Library</h1>
        <p>Welcome to <b>Snack Rankings</b>, the world's most famous snack-ranking site!</p>
        <p>View our Pokemon</p>
        <ul>
            <li><Link to="/snacks" style={linkStyle}>Explore snacks</Link></li>
            <li><Link to="/best" style={linkStyle}>See the champion</Link></li>
        </ul>
    </main>
    )
};

export default HomePage;
