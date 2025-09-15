"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-gray-100 dark:bg-gray-900 transition-colors'>
      <div className='text-center'>
        <div className='mb-6 sm:mb-8'>
          <Image
            src='/me.jpg'
            alt='Profile Picture'
            width={120}
            height={120}
            className='rounded-full mx-auto border-4 border-gray-700 shadow-lg'
          />
        </div>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4'>
          Vivek Subraveti Uma Mahesh
        </h1>
        <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8'>
          Software Engineer
        </p>
        <p className='text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4 content-center'>
          Software engineer with a Master’s in Automotive Software Engineering,
          skilled in Python, Django, React, Next.js, and cloud-native
          technologies, building scalable, data-driven applications across
          frontend, backend, APIs, and DevOps.
        </p>
      </div>
    </section>
  );
}
