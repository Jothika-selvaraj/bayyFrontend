import React from "react";
import Image from "next/image"; // Import Next.js Image component

const Section3 = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      {/* Header */}
      <div className="text-left mb-12 pl-40">
        <h2 className="text-5xl text-black">
          Related <span className="text-[#f14d5d] font-bold">Course</span>
        </h2>
        <p className="mt-4 text-gray-600">
          You don&apos;t have to struggle alone, you&apos;ve got our assistance and help.
        </p>
      </div>

      {/* Course Cards */}
      <div className="flex justify-start gap-6 pl-40">
        {/* Card 1 */}
        <a
          href="/courses/quranic-studies"
          className="bg-white border rounded-lg shadow-md overflow-hidden w-[300px] hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative">
            <Image
              src="/assets/Courses/quran3.jpg"
              alt="Quranic Studies Course"
              width={300}
              height={192}
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#f14d5d] text-white text-sm px-3 py-1 rounded-full">
              Quranic
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-lg text-gray-800 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis consectetur, porro possimus neque perferendi
            </h3>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="/courses/arabic-language"
          className="bg-white border rounded-lg shadow-md overflow-hidden w-[300px] hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative">
            <Image
              src="/assets/Courses/arabic3.jpg"
              alt="Arabic Language Course"
              width={300}
              height={192}
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#f14d5d] text-white text-sm px-3 py-1 rounded-full">
              Arabic
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-lg text-gray-800 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam nesciunt numquam magni maiores iste    
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Section3;
