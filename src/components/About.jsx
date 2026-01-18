import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FaBrain, FaCloud, FaCode, FaRobot } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <div className="w-full md:w-1/2 glass p-8 rounded-2xl">
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                {profile.bio}
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                As an <span className="text-highlight font-semibold">AI Advocate</span>, I am actively exploring the frontiers of Generative AI and Large Language Models, applying them to optimize DevOps workflows and create intelligent infrastructure solutions.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
                            <div className="space-y-6">
                                {Object.entries(profile.skills).map(([category, items]) => (
                                    <div key={category}>
                                        <h4 className="text-highlight font-semibold capitalize mb-3 text-lg border-b border-gray-700 pb-1">{category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((skill, idx) => (
                                                <span key={idx} className="glass px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-highlight transition-colors">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
