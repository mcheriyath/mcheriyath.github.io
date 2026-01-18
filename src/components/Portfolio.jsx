import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My Portfolio</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="glass rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="p-8">
                                    <div className={`text-4xl mb-4 ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <project.icon />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="text-xs font-medium bg-secondary text-gray-300 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    {project.details && (
                                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                                            {project.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
