import { AcademicCapIcon } from "@heroicons/react/24/solid";

const education = [
  {
    degree: "Master of Science in Automotive Software Engineering",
    university: "Technische Universitat Chemnitz",
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
    <section id="education" className="py-16 sm:py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Education
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl">
          Two Master&apos;s degrees across software engineering and automotive systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-card p-6 group hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <AcademicCapIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                    {edu.university}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {edu.location} &middot; {edu.year}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.courses}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
