import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div>
            This Page is Home Page!! <br />
            <Link to={'/about'}>about</Link>
        </div>
    );
};

export default Home;
