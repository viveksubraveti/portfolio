import { AcademicCapIcon } from "@heroicons/react/24/solid";

const education = [
  {
    degree: "Master of Science in Automotive Software Engineering",
    university: "Technische Universität Chemnitz",
    location: "Chemnitz, Germany",
    year: "2021",
    courses:
      "Software Platforms for Automotive Systems, Multicore Programming, Image Processing, Machine Learning",
  },
  {
    degree: "Master of Science in Software Engineering",
    university: "Sri Ramakrishna Engineering College",
    location: "Coimbatore, India",
    year: "2014",
    courses: "Software Development & Data Structures",
  },
];

export default function EducationSection() {
  return (
    <section
      id='education'
      className='bg-gray-100 dark:bg-gray-900 py-12 sm:py-20 transition-colors'
    >
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
          Education
        </h2>
        <ul className='space-y-8 mb-12'>
          {education.map((edu, idx) => (
            <li key={idx} className='flex items-start gap-4'>
              <AcademicCapIcon className='h-8 w-8 text-blue-500 flex-shrink-0 mt-1' />
              <div>
                <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-1'>
                  {edu.degree}
                </h3>
                <div className='flex flex-wrap items-center gap-2 mb-1'>
                  <span className='text-blue-600 dark:text-blue-400 font-semibold'>
                    {edu.university}
                  </span>
                  <span className='italic text-gray-600 dark:text-gray-300'>
                    {edu.location}
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>
                    {edu.year}
                  </span>
                </div>
                <div className='text-gray-600 dark:text-gray-300'>
                  Coursework: {edu.courses}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
