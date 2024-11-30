'use client';
import { assets } from '@/public/assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get('/api/blog', {
          params: {
            id: params.id,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setError('Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, [params.id]); // Dependency on `params.id`

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No blog post found</div>;

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt={data.author}
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={800}
          height={480}
          alt={data.title}
        />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Google Plus" />
          </div>
        </div>
      </div>
    </>
  ) : null;
};

// Validate props using PropTypes
Page.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Page;
