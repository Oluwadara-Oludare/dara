import React from 'react'
import Image from 'next/image'
import { blog_data } from '@/public/assets/assets'
import Link from 'next/link'

const BlogItem = ({title, description, category, image, id}) => {
  return (
    <div className = 'max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-lg hover:opacity-90 transition-opacity duration-200'>
        <Link href={`/blogs/${id}`}>
        <Image src = {image} width= {400} height={400} className = 'border-b border-black '/></Link>
        <p className = 'ml-5 mt-5 px-4 inline-block bg-slate-700 text-white text-sm'>{category}</p>
        <div className= 'p-6'>
            <h4 className = 'mb-2 text-lg font-medium tracking-tight text-black'>{title}</h4>
            <p className = 'mb-3 text-sm tracking-tight text-gray-950'>{description}</p>
            <Link href= {`/blogs/${id}`} className= 'inline-flex items-center py-3 font-semibold'>
                READ MORE...
            </Link>
        
        </div>
      
    </div>
    
  )
}

export default BlogItem
