import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/blogLoader';
import { FaCalendar, FaTag, FaFolder } from 'react-icons/fa';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    useEffect(() => {
        const loadPosts = async () => {
            const allPosts = await getAllPosts();
            setPosts(allPosts);
            setFilteredPosts(allPosts);

            // Extract unique categories
            const cats = ['All', ...new Set(allPosts.map(post => post.category))];
            setCategories(cats);
        };
        loadPosts();
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(posts.filter(post => post.category === selectedCategory));
        }
        setCurrentPage(1); // Reset to page 1 on filter change
    }, [selectedCategory, posts]);

    // Pagination Logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <section className="pt-24 pb-20 min-h-screen container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title mb-12">Tech Blog</h1>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-highlight text-white shadow-lg scale-105'
                                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`} className="block glass rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col group">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
                                    <img
                                        src={post.image || '/vite.svg'}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="bg-highlight px-3 py-1 rounded text-xs font-bold text-white shadow-md">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center text-gray-400 text-xs mb-3 space-x-4">
                                        <span className="flex items-center"><FaCalendar className="mr-1" /> {post.date}</span>
                                        {/* <span className="flex items-center"><FaClock className="mr-1" /> 5 min read</span> */}
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-highlight transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                                        {post.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {post.tags?.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs text-secondary bg-white/10 px-2 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-16 space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentPage === i + 1
                                        ? 'bg-highlight text-white font-bold'
                                        : 'glass text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default BlogList;
