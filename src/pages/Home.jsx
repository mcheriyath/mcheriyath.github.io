import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Portfolio />
        </>
    );
};

export default Home;
