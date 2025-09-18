"use client";

import VisitorCount from "./VisitorCount";
import { LINKS } from "../config/links";
import { MdEmail } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='py-6 px-4 border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-800 transition-colors'
    >
      <div className='max-w-lg mx-auto'>
        <div className='text-center space-y-4'>
          <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
            Contact
          </h2>

          {/* Contact Buttons */}
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <a
              href={LINKS.email}
              className='px-6 py-2 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg'
            >
              <MdEmail className='w-5 h-5' />
              Get in Touch
            </a>

            <a
              href={LINKS.resume}
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg'
            >
              <AiOutlineFilePdf className='w-5 h-5' />
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className='flex flex-col items-center gap-3'>
            <div className='flex justify-center gap-4'>
              <a
                href={LINKS.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300'
              >
                <FaGithub className='w-6 h-6' />
              </a>

              <a
                href={LINKS.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300'
              >
                <FaLinkedin className='w-6 h-6' />
              </a>
            </div>

            {/* Visitor Count Component */}
            <VisitorCount />
          </div>
        </div>
      </div>
    </section>
  );
}
