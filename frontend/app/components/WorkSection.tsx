import { useState } from "react";

type Project = {
  name: string;
  description: string[];
  tools: string[];
};

type Work = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  projects: Project[];
};

const workHistory: Work[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Segula Technologies GmbH",
    location: "Cologne, Germany",
    period: "Apr 2021 – Present",
    projects: [
      {
        name: "Vehicle Maneuver Analysis & Route Planning",
        description: [
          "Developed solution with 95% accuracy for detecting maneuvers (acceleration, turns, junctions)",
          "Improved detection in complex scenarios like intersections & pedestrian crossings",
          "Processed & analyzed data of over 1000kms of mapped routes, reducing processing time by 50%",
        ],
        tools: [
          "Python",
          "OpenStreetMap",
          "Folium",
          "OSMnx",
          "NetworkX",
          "Plotly",
          "GitLab",
          "Jira",
        ],
      },
      {
        name: "Web Application Development",
        description: [
          "Built more than 50 RESTful APIs with Django ensuring secure JWT authentication",
          "Designed and optimized MySQL database, achieving 40% faster queries",
          "Developed frontend screens with NextJS and Tailwind CSS",
        ],
        tools: [
          "Django",
          "Python",
          "REST APIs",
          "MySQL",
          "NextJS",
          "Tailwind CSS",
          "Swagger",
          "GitLab",
          "Trello",
          "Figma",
          "Postman",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Intern & Master Thesis",
    company: "AVL Deutschland GmbH",
    location: "Stuttgart, Germany",
    period: "May 2019 – Sep 2020",
    projects: [
      {
        name: "Master Thesis – ADAS Data Optimization",
        description: [
          "Developed method to reduce raw ADAS image data using CV & DL",
          "Built pipeline for detecting non-traffic-relevant regions (e.g., sky, irrelevant objects)",
          "Applied hybrid approach of classical CV + DL for segmentation & compression",
        ],
        tools: ["Python", "OpenCV", "TensorFlow", "PyTorch", "NumPy"],
      },
      {
        name: "Internship – Emissions Data Analysis",
        description: [
          "Analyzed & evaluated emissions test data from multiple OEMs",
          "Developed Python scripts to automate existing analysis tools",
          "Improved workflows with object-oriented structuring (classes & functions)",
        ],
        tools: [
          "Python",
          "Jupyter",
          "AVL Concerto",
          "MS Excel",
          "Keras",
          "PyCharm",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Changepond Technologies",
    location: "Chennai, India",
    period: "Jan 2015 – Dec 2017",
    projects: [
      {
        name: "Enterprise Web Application",
        description: [
          "Supported Struts-based Java web application",
          "Created & optimized stored procedures for SQL databases",
          "Handled bug fixes, performance optimization, and system maintenance",
        ],
        tools: [
          "Java",
          "Struts",
          "Spring",
          "MSSQL",
          "Eclipse",
          "HTML",
          "JavaScript",
          "CSS",
          "SVN",
          "JIRA",
        ],
      },
    ],
  },
];

export default function WorkSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id='experience'
      className='bg-white dark:bg-gray-800 py-12 sm:py-20 transition-colors'
    >
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
          Work History
        </h2>
        <div className='space-y-6'>
          {workHistory.map((job) => (
            <div
              key={job.id}
              className='bg-white dark:bg-gray-800 border border-gray-300 dark:border-blue-700 rounded-xl p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer'
              onClick={() => toggleOpen(job.id)}
            >
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                <div>
                  <div className='text-lg font-semibold text-gray-900 dark:text-white'>
                    {job.title}
                  </div>
                  <div className='text-blue-600 dark:text-blue-400 font-medium'>
                    {job.company}
                  </div>
                  <div className='text-gray-600 dark:text-gray-300 italic'>
                    {job.location}
                  </div>
                </div>
                <div className='flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0'>
                  {job.period}
                </div>
              </div>

              {/* Projects */}
              {openId === job.id && (
                <div className='mt-6 border-t border-gray-200 dark:border-gray-600 pt-4 space-y-5'>
                  {job.projects.map((project, idx) => (
                    <div key={idx} className='space-y-3'>
                      <h3 className='text-md font-semibold text-gray-800 dark:text-gray-200'>
                        {project.name}
                      </h3>
                      <ul className='list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300'>
                        {project.description.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                      <div className='flex flex-wrap gap-2 mt-2'>
                        {project.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className='bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-medium'
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
