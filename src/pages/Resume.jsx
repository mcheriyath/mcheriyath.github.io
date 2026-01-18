import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
    return (
        <div className="pt-24 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-white">My Resume</h1>
                    <a href={profile.links.resume} download className="btn btn-primary flex items-center space-x-2">
                        <FaDownload />
                        <span>Download PDF</span>
                    </a>
                </div>

                <div className="w-full h-[800px] glass rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                        src={profile.links.resume}
                        className="w-full h-full border-none"
                        title="Resume"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
