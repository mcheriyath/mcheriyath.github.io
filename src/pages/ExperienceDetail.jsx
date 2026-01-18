import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { projects } from '../data/projects'; // In a real app we'd likely filter 'projects' by 'companyId' 
import { FaArrowLeft, FaBriefcase } from 'react-icons/fa';

const ExperienceDetail = () => {
    const { id } = useParams();
    const experience = profile.experience.find(exp => exp.id === id);

    if (!experience) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Experience Not Found</h2>
                    <Link to="/" className="text-highlight hover:underline">Go Home</Link>
                </div>
            </div>
        );
    }

    // NOTE: For this demo, since 'projects' are in a separate file and not explicitly linked by ID yet,
    // we will display ALL projects as a generic "Skills & Projects Applied" section, 
    // OR we can implement a filtering logic if the user updates projects.js with company IDs.
    // For now, I will display the specific Projects array from the profile.js if it has items, 
    // otherwise fallback to displaying the generic projects list as "Related Projects".

    const displayProjects = experience.projects && experience.projects.length > 0
        ? experience.projects
        : projects; // Fallback to all projects for demo purposes

    return (
        <div className="pt-24 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link to="/" className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <FaArrowLeft className="mr-2" /> Back to Home
                </Link>

                <div className="glass p-8 rounded-2xl mb-12 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg flex-shrink-0">
                        <img
                            src={experience.logo}
                            alt={experience.company}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">{experience.role}</h1>
                        <h2 className="text-2xl text-highlight font-semibold mb-2">{experience.company}</h2>
                        <p className="text-orange-400 font-medium text-lg mb-4">{experience.period}</p>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                            {experience.description}
                        </p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-highlight pl-4">Key Projects & Achievements</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8">
                                {project.icon && (
                                    <div className={`text-4xl mb-4 ${project.color || 'text-highlight'}`}>
                                        <project.icon />
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                {project.tech && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="text-xs font-medium bg-secondary text-gray-300 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
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
    );
};

export default ExperienceDetail;
