import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="bg-primary min-h-screen text-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Contact />
        </div>
    );
};

export default Layout;
