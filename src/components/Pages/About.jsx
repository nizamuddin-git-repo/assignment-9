import React from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const propertyId = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center text-4xl'>Property</h2>
        </div>
    );
};

export default About;