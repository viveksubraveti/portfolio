"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { LINKS } from "../config/links";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Cloud Portfolio Infrastructure",
    description:
      "This portfolio itself - a full-stack cloud-native application with Next.js frontend, AWS Lambda backend, DynamoDB visitor tracking, S3 + CloudFront hosting, Terraform IaC, and GitHub Actions CI/CD pipeline.",
    tech: ["Next.js", "TypeScript", "AWS", "Terraform", "Lambda", "DynamoDB", "GitHub Actions"],
    github: LINKS.github,
    live: LINKS.website.main,
    accent: "indigo",
  },
  {
    title: "Vehicle Maneuver Analysis",
    description:
      "Geospatial analysis platform achieving 95% accuracy in detecting driving maneuvers across 1000+ km of mapped routes. Combines OpenStreetMap data with custom algorithms for route planning and maneuver classification.",
    tech: ["Python", "OSMnx", "NetworkX", "Plotly", "Folium", "OpenStreetMap"],
    accent: "emerald",
  },
  {
    title: "ADAS Data Optimization",
    description:
      "Master thesis project - a hybrid classical CV and deep learning pipeline for reducing raw ADAS image data by detecting and compressing non-traffic-relevant regions in autonomous driving datasets.",
    tech: ["Python", "OpenCV", "TensorFlow", "PyTorch", "NumPy"],
    accent: "purple",
  },
];

const accentStyles: Record<string, { tag: string; border: string; glow: string }> = {
  indigo: {
    tag: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
    border: "hover:border-indigo-400 dark:hover:border-indigo-500",
    glow: "hover:shadow-indigo-500/10",
  },
  emerald: {
    tag: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
    border: "hover:border-emerald-400 dark:hover:border-emerald-500",
    glow: "hover:shadow-emerald-500/10",
  },
  purple: {
    tag: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    border: "hover:border-purple-400 dark:hover:border-purple-500",
    glow: "hover:shadow-purple-500/10",
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl">
          Highlights from my professional and personal work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const style = accentStyles[project.accent];
            return (
              <div
                key={project.title}
                className={`glass-card p-6 flex flex-col transition-all duration-300 hover:shadow-xl ${style.border} ${style.glow} hover:-translate-y-1 group`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2 py-0.5 rounded-md text-xs font-medium ${style.tag}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
