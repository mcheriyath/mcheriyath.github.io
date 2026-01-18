import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    return (
        <div className="pt-24 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold text-white mb-12">Certifications</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-xl flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="w-32 h-32 bg-white rounded-full p-4 mb-6 flex items-center justify-center shadow-lg">
                                <img
                                    src={cert.logo}
                                    alt={cert.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                            <p className="text-gray-400 font-medium mb-1">{cert.issuer}</p>
                            <p className="text-gray-500 text-sm mb-6">Issued: {cert.date}</p>

                            {/* Credential link removed as per user request */}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Certifications;
