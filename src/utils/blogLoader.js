import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for gray-matter in the browser
window.Buffer = window.Buffer || Buffer;

export const getAllPosts = async () => {
    const modules = import.meta.glob('/src/content/posts/*.md', { query: '?raw', import: 'default' });
    const posts = [];

    for (const path in modules) {
        const rawContent = await modules[path]();
        const { data, content } = matter(rawContent);

        // Extract slug from filename
        const slug = path.split('/').pop().replace('.md', '');

        posts.push({
            slug,
            ...data,
            content,
        });
    }

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPostBySlug = async (slug) => {
    const posts = await getAllPosts();
    return posts.find((post) => post.slug === slug);
};
