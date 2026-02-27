"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

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
  duration: string;
  current?: boolean;
  highlights: string[];
  projects: Project[];
};

const workHistory: Work[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Segula Technologies GmbH",
    location: "Cologne, Germany",
    period: "Apr 2021 - Present",
    duration: "4+ yrs",
    current: true,
    highlights: [
      "Architected 50+ REST APIs in Django with JWT auth and role-based access control",
      "Engineered vehicle maneuver detection achieving 95% accuracy across 1,000+ km of route data",
    ],
    projects: [
      {
        name: "Vehicle Maneuver Analysis & Route Planning",
        description: [
          "Engineered a maneuver detection system identifying acceleration, turns, and junction events with 95% classification accuracy",
          "Enhanced detection reliability in complex urban scenarios including multi-lane intersections and pedestrian crossings",
          "Optimized route data processing pipeline across 1,000+ km of mapped routes, cutting processing time by 50%",
        ],
        tools: ["Python", "OpenStreetMap", "Folium", "OSMnx", "NetworkX", "Plotly", "GitLab", "Jira"],
      },
      {
        name: "Web Application Development",
        description: [
          "Designed and implemented 50+ RESTful API endpoints in Django with JWT-based authentication and role-based access control",
          "Re-architected MySQL database schema and query layer, achieving 40% reduction in response times",
          "Built responsive frontend interfaces using Next.js and Tailwind CSS, collaborating with designers via Figma",
        ],
        tools: ["Django", "Python", "REST APIs", "MySQL", "NextJS", "Tailwind CSS", "Swagger", "GitLab", "Trello", "Figma", "Postman"],
      },
    ],
  },
  {
    id: 2,
    title: "Intern & Master Thesis",
    company: "AVL Deutschland GmbH",
    location: "Stuttgart, Germany",
    period: "May 2019 - Sep 2020",
    duration: "1.5 yrs",
    highlights: [
      "Developed a hybrid CV and deep learning pipeline to reduce ADAS camera data volume",
      "Automated emissions test bench analysis, replacing manual Excel-based workflows",
    ],
    projects: [
      {
        name: "Master Thesis — ADAS Data Optimization",
        description: [
          "Researched and developed a novel method to reduce raw ADAS camera data volume using computer vision and deep learning",
          "Built an automated pipeline to detect and filter non-traffic-relevant regions (sky, vegetation, irrelevant objects) from driving footage",
          "Combined classical CV techniques with deep learning models for semantic segmentation and targeted image compression",
        ],
        tools: ["Python", "OpenCV", "TensorFlow", "PyTorch", "NumPy"],
      },
      {
        name: "Internship — Emissions Data Analysis",
        description: [
          "Analyzed vehicle emissions test bench data to validate compliance with regulatory standards",
          "Developed Python automation scripts replacing manual Excel-based analysis workflows",
          "Refactored legacy scripts into modular, object-oriented architecture for improved maintainability",
        ],
        tools: ["Python", "Jupyter", "AVL Concerto", "MS Excel Macros", "Keras", "PyCharm"],
      },
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Changepond Technologies Pvt Ltd",
    location: "Chennai, India",
    period: "Jan 2015 - Dec 2017",
    duration: "3 yrs",
    highlights: [
      "Maintained and enhanced an enterprise Java web application serving business-critical workflows",
      "Led database migration from SQL Server 2008 to 2016 with performance tuning and regression testing",
    ],
    projects: [
      {
        name: "Enterprise Web Application",
        description: [
          "Provided L2/L3 support for a Struts-based enterprise web application used across multiple business units",
          "Designed and optimized SQL stored procedures for KPI calculations, improving reporting accuracy and dashboard performance",
          "Led end-to-end database migration from SQL Server 2008 to 2016, including schema upgrades, performance tuning, and regression testing",
        ],
        tools: ["Java", "Struts", "Spring", "MSSQL", "Eclipse", "HTML", "JavaScript", "CSS", "SVN", "Jira"],
      },
    ],
  },
];

export default function WorkSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-16 sm:py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Experience
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl">
          My professional journey across automotive software, web development, and enterprise systems.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-300 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600" />

          <div className="space-y-12">
            {workHistory.map((job) => (
              <div key={job.id} className="relative pl-12 sm:pl-20">
                {/* Timeline dot — only current role pulses */}
                <div
                  className={`absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full ring-4 ring-white dark:ring-gray-950 ${
                    job.current
                      ? "bg-green-500 dark:bg-green-400 animate-pulse-dot"
                      : "bg-indigo-500 dark:bg-indigo-400"
                  }`}
                />

                {/* Year label — horizontal, clean */}
                <span className="absolute left-[-2px] sm:left-[-4px] top-[-22px] text-[10px] font-mono font-semibold text-indigo-500 dark:text-indigo-400 tracking-wide">
                  {job.period.split(" - ")[0].split(" ")[1]}
                </span>

                {/* Content card */}
                <div
                  className="glass-card p-6 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer group"
                  onClick={() => setOpenId(openId === job.id ? null : job.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {job.title}
                        </h3>
                        {job.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {job.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {job.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                        {job.duration}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {job.period}
                      </span>
                      <ChevronDownIcon
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                          openId === job.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Key highlights — always visible */}
                  <ul className="mt-4 space-y-1">
                    {job.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-indigo-500 mt-0.5 shrink-0">&#8226;</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags - always visible */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {[...new Set(job.projects.flatMap((p) => p.tools.slice(0, 4)))].slice(0, 6).map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-md text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Expanded project details — animated */}
                  <AnimatePresence>
                    {openId === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700/50 space-y-6">
                          {job.projects.map((project) => (
                            <div key={`${job.id}-${project.name}`}>
                              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                {project.name}
                              </h4>
                              <ul className="space-y-1.5 mb-3">
                                {project.description.map((point, pIdx) => (
                                  <li
                                    key={pIdx}
                                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                                  >
                                    <span className="text-indigo-500 mt-1 flex-shrink-0">-</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1.5">
                                {project.tools.map((tool) => (
                                  <span
                                    key={`${project.name}-${tool}`}
                                    className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded text-xs"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
