import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../utils/blogLoader';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { FaArrowLeft, FaCalendar, FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            const data = await getPostBySlug(slug);
            setPost(data);
        };
        loadPost();
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    return (
        <article className="pt-24 pb-20 min-h-screen container mx-auto px-6 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <FaArrowLeft className="mr-2" /> Back to Blog
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-highlight px-3 py-1 rounded text-sm font-bold text-white">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center text-gray-400 text-sm space-x-6 border-b border-gray-700 pb-8">
                        <span className="flex items-center"><FaCalendar className="mr-2" /> {post.date}</span>
                        {/* <span className="flex items-center"><FaUser className="mr-2" /> Mithun Cheriyath</span> */}
                    </div>
                </div>

                {/* Featured Image */}
                {post.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden glass p-2">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 md:h-96 object-cover rounded-xl"
                        />
                    </div>
                )}

                {/* Markdown Content */}
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={atomDark}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={`${className} bg-gray-800 px-1 py-0.5 rounded text-sm text-highlight`} {...props}>
                                        {children}
                                    </code>
                                )
                            },
                            // Custom styles for other elements
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mt-12 mb-6" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-highlight pl-4" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-white mt-8 mb-3" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-6 leading-relaxed" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-6 space-y-2" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-6 space-y-2" {...props} />,
                            li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-500 pl-4 italic my-6 text-gray-400" {...props} />,
                            a: ({ node, ...props }) => <a className="text-highlight hover:underline" {...props} />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Footer / Tags */}
                <div className="mt-16 pt-8 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                        {post.tags?.map(tag => (
                            <span key={tag} className="flex items-center text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                                <FaTag className="mr-2 text-xs" /> {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </article>
    );
};

export default BlogPost;
