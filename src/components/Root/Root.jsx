import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';
const Root = () => {
    return (
        <div className='max-w-7xl mx-auto mt-5'>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;