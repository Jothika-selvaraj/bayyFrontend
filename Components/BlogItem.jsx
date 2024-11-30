import React from 'react'
import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types'; 


const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white rounded overflow-hidden shadow-lg">
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt={title} width={400} height={400} className="border-b border-black" />
      </Link>
      <div className="px-6 py-4">
        <p className="text-sm text-gray-600">{category}</p>
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      </div>
      <p className="text-gray-700 px-6" dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}></p>
      <Link href={`/blogs/${id}`} 
        className="inline-flex items-center py-2 px-6 font-semibold text-center text-blue-600 hover:text-blue-800 mt-3">
        Read more
        <Image src={assets.arrow} className="ml-2" alt="arrow icon" width={12} height={12} />
      </Link>
    </div>
  )
}



BlogItem.propTypes = {
  title: PropTypes.string.isRequired, // 'title' is a required string
  description: PropTypes.string.isRequired, // 'description' is a required string
  category: PropTypes.string.isRequired, // 'category' is a required string
  image: PropTypes.string.isRequired, // 'image' is a required string (assumes an image path is a string)
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 'id' can be a string or number
};

export default BlogItem




