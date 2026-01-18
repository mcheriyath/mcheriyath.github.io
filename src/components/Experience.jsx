import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Professional Experience</h2>

                    <div className="relative border-l border-gray-700 ml-4 md:ml-10 space-y-12">
                        {profile.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="mb-10 ml-6"
                            >
                                <div className="absolute w-8 h-8 bg-highlight rounded-full -left-4 flex items-center justify-center border-4 border-primary z-10">
                                    <FaBriefcase className="text-white text-sm" />
                                </div>
                                <Link to={`/experience/${exp.id}`} className="block glass p-6 rounded-xl hover:shadow-xl hover:bg-white/10 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">

                                    {/* Company Logo */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors">{exp.role}</h3>
                                            <span className="text-orange-400 font-medium text-sm md:text-base">{exp.period}</span>
                                        </div>
                                        {/* <h4 className="text-lg text-gray-400 mb-3 font-semibold">{exp.company}</h4> */}
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            {exp.description}
                                        </p>
                                        <p className="text-highlight text-sm mt-4 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Projects &rarr;
                                        </p>
                                    </div>

                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
