import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const Section2 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-yellow-400 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-lg pr-12">
            <Image
              src="/assets/Course/b5.png"
              alt="Quran Master Studies"
              className="w-full h-auto"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 text-white text-center md:text-left">
          <h3 className="text-[#f14d5d] font-bold text-lg uppercase"> QURAN MASTER STUDIES </h3>
          <h1 className="text-5xl mb-2">Learn Quranic Masters</h1>
          <p className="mt-8 text-lg leading-6">
            Embark on a journey to master Quranic studies with our comprehensive program. 
            Develop a deep understanding of the Quran through expert guidance and 
            structured learning.
          </p>
          <button className="mt-6 px-6 py-4 bg-[#f14d5d] text-white font-bold rounded-md shadow-md hover:bg-white hover:text-black">
            Enroll Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
