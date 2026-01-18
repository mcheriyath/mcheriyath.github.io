import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary relative mt-auto">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities involved with Cloud, DevOps, and AI.
                    </p>

                    <div className="flex justify-center space-x-8 mb-12">
                        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-400 hover:text-highlight transition-colors hover:-translate-y-1 transform duration-300">
                            <FaLinkedin />
                        </a>
                        <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-400 hover:text-highlight transition-colors hover:-translate-y-1 transform duration-300">
                            <FaGithub />
                        </a>
                        <a href={profile.links.twitter} target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-400 hover:text-highlight transition-colors hover:-translate-y-1 transform duration-300">
                            <FaTwitter />
                        </a>
                        <a href={`mailto:${profile.email}`} className="text-4xl text-gray-400 hover:text-highlight transition-colors hover:-translate-y-1 transform duration-300">
                            <FaEnvelope />
                        </a>
                    </div>

                    <footer className="text-gray-500 mt-20 border-t border-gray-700 pt-8">
                        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
