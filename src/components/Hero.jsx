import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = profile.roles[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % profile.roles.length);
            } else {
                const nextText = isDeleting
                    ? currentRole.substring(0, displayText.length - 1)
                    : currentRole.substring(0, displayText.length + 1);
                setDisplayText(nextText);
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary pt-16">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-highlight rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-accent rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-highlight to-accent rounded-full blur-lg opacity-75 animate-pulse"></div>
                        <img
                            src="/profile.png"
                            alt={profile.name}
                            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl object-cover mx-auto hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <h2 className="text-xl md:text-2xl text-highlight mb-4 font-semibold tracking-wide">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        {profile.name}
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-gray-300 h-16">
                        I am {/^[aeiou]/i.test(profile.roles[roleIndex]) ? 'an' : 'a'} <span className="text-highlight">{displayText}</span>
                        <span className="animate-pulse">|</span>
                    </h3>

                    <div className="mt-12 flex justify-center space-x-6">
                        <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">View My Work</a>
                        <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download Resume</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
