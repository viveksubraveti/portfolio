"use client";

type SkillCategory = {
  title: string;
  accent: string;
  tagStyle: string;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    accent: "indigo",
    tagStyle: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "Django", "React", "Next.js", "Node.js", "Tailwind CSS", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    accent: "emerald",
    tagStyle: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Helm", "Linux", "Lambda", "GitHub Actions", "GitLab CI", "REST APIs"],
  },
  {
    title: "Data & Databases",
    accent: "purple",
    tagStyle: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "MSSQL", "Pandas", "NumPy", "Plotly"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Tech Stack
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl">
          Technologies I work with day-to-day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="glass-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-default ${category.tagStyle}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
