import { blog_data } from '@/public/assets/assets';
import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {
    const [menu, setMenu] = useState('All');

    const filteredBlogs = menu === 'All' ? blog_data : blog_data.filter(item => item.category === menu);

    return (
        <div>
            <div className="flex justify-center gap-6 my-12">
                <button onClick={() => setMenu('All')} className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>All</button>
                <button onClick={() => setMenu('Electricity')} className={menu === 'Electricity' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Electricity</button>
                <button onClick={() => setMenu('Mathematics')} className={menu === 'Mathematics' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Mathematics</button>
                <button onClick={() => setMenu('Engineering')} className={menu === 'Engineering' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Engineering</button>
            </div>
            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-12 xl:mx-25">
                {filteredBlogs.map((item, index) => (
                    <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
                ))}
            </div>
        </div>
    );
}

export default BlogList;
