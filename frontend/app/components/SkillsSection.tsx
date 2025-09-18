"use client";

import { useState, useEffect, useRef } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";

const skills = [
  { name: "Python", stars: 4, inProgress: true },
  { name: "JavaScript", stars: 4, inProgress: true },
  { name: "Java", stars: 3, inProgress: true },
  { name: "Django", stars: 5, inProgress: false },
  { name: "React/Next.js", stars: 3, inProgress: true },
  { name: "Node.js", stars: 3, inProgress: false },
  { name: "Pandas/NumPy", stars: 4, inProgress: false },
  { name: "RESTful APIs", stars: 4, inProgress: true },
  { name: "AWS", stars: 2, inProgress: true },
  { name: "Terraform", stars: 4, inProgress: true },
  { name: "Docker/Kubernetes", stars: 3, inProgress: true },
  { name: "MySQL/PostgreSQL", stars: 4, inProgress: false },
];

interface StarRatingProps {
  skill: (typeof skills)[0];
  isVisible: boolean;
}

function StarRating({ skill, isVisible }: StarRatingProps) {
  const [animatedStars, setAnimatedStars] = useState(0);
  const [progress, setProgress] = useState(0);

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
      }, 100);

      // Animate progress for in-progress star
      if (skill.inProgress) {
        setProgress(0);
        const progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) return 0;
            return prev + 5;
          });
        }, 50);
        return () => {
          clearInterval(interval);
          clearInterval(progressInterval);
        };
      }

      return () => clearInterval(interval);
    } else {
      setAnimatedStars(0);
      setProgress(0);
    }
  }, [isVisible, skill.stars, skill.inProgress]);

  return (
    <div className='flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow'>
      <span className='text-sm font-semibold text-gray-900 dark:text-white'>
        {skill.name}
      </span>
      <div className='flex space-x-1'>
        {[1, 2, 3, 4, 5].map((star) => {
          if (star <= animatedStars) {
            return (
              <StarIcon
                key={star}
                className='w-5 h-5 text-yellow-400 transition-all duration-300'
              />
            );
          } else if (star === animatedStars + 1 && skill.inProgress) {
            return (
              <div key={star} className='relative w-5 h-5'>
                <StarOutlineIcon className='w-5 h-5 text-gray-300 dark:text-gray-600 absolute' />
                <div
                  className='absolute inset-0 overflow-hidden'
                  style={{ width: `${progress}%` }}
                >
                  <StarIcon className='w-5 h-5 text-yellow-400' />
                </div>
              </div>
            );
          } else {
            return (
              <StarOutlineIcon
                key={star}
                className='w-5 h-5 text-gray-300 dark:text-gray-600'
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
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
                "MSSQL",
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
