import React from 'react';
import Navbar from './Navbar';
import Banner from '../Banner';
import Featured from '../Featured';
import Properties from './Properties';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <Properties></Properties>
        </div>
    );
};

export default Home;