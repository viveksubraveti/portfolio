"use client";

import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "Python", stars: 5 },
  { name: "JavaScript", stars: 5 },
  { name: "Django", stars: 5 },
  { name: "AWS", stars: 3 },
  { name: "Java", stars: 3 },
  { name: "React/Next.js", stars: 4 },
  { name: "Node.js", stars: 3 },
  { name: "Docker/Kubernetes", stars: 4 },
  { name: "Terraform", stars: 4 },
  { name: "MySQL/PostgreSQL", stars: 4 },
  { name: "RESTful APIs", stars: 4 },
  { name: "Pandas/NumPy", stars: 4 },
];

interface StarRatingProps {
  skill: (typeof skills)[0];
  isVisible: boolean;
}

function StarRating({ skill, isVisible }: StarRatingProps) {
  const [animatedStars, setAnimatedStars] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let currentStar = 0;
      const interval = setInterval(() => {
        if (currentStar < skill.stars) {
          currentStar++;
          setAnimatedStars(currentStar);
        } else {
          clearInterval(interval);
        }
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isVisible, skill.stars]);

  return (
    <div className='flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow'>
      <span className='text-sm font-semibold text-gray-900 dark:text-white'>
        {skill.name}
      </span>
      <div className='flex space-x-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 transition-all duration-300 ${
              star <= animatedStars
                ? "text-yellow-400 scale-110"
                : "text-gray-300 dark:text-gray-600"
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='bg-white dark:bg-gray-800 py-16 sm:py-24 transition-colors'
    >
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
          Technical Skills
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {skills.map((skill) => (
            <StarRating key={skill.name} skill={skill} isVisible={isVisible} />
          ))}
        </div>

        {/* Skills Categories */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Languages & Frameworks
            </h3>
            <div className='flex flex-wrap justify-center gap-2'>
              {[
                "Python",
                "JavaScript",
                "Java",
                "Django",
                "Node.js",
                "React",
                "Next.js",
                "RESTful APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className='text-center'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Cloud & DevOps
            </h3>
            <div className='flex flex-wrap justify-center gap-2'>
              {[
                "AWS (EC2, S3, Lambda)",
                "Docker",
                "Kubernetes",
                "Terraform",
                "GitLab",
                "Jira",
              ].map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className='text-center'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Data & Databases
            </h3>
            <div className='flex flex-wrap justify-center gap-2'>
              {[
                "MySQL",
                "MariaDB",
                "PostgreSQL",
                "MongoDB",
                "DynamoDB",
                "Pandas",
                "NumPy",
                "Plotly",
              ].map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
