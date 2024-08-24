import React from 'react';
import Navbar from './Navbar';
import Banner from '../Banner';
import Featured from '../Featured';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
        </div>
    );
};

export default Home;