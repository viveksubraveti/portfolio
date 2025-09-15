import {
  CloudIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  ServerStackIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const skills = [
  {
    icon: <CodeBracketIcon className='h-5 w-5 text-orange-500' />,
    label: "Languages: Python, JavaScript, Java, Bash, PowerShell",
  },
  {
    icon: <WrenchScrewdriverIcon className='h-5 w-5 text-orange-500' />,
    label: "Web Frameworks & Libraries: Django, Next.js, React",
  },
  {
    icon: <ServerStackIcon className='h-5 w-5 text-orange-500' />, // <-- updated here
    label: "Databases: PostgreSQL, MySQL, SQLite",
  },
  {
    icon: <CloudIcon className='h-5 w-5 text-orange-500' />,
    label: "Cloud Platforms: AWS",
  },
  {
    icon: <ArrowPathIcon className='h-5 w-5 text-orange-500' />,
    label: "DevOps & Containerization: Docker, Kubernetes, Terraform",
  },
  {
    icon: <ArrowPathIcon className='h-5 w-5 text-orange-500' />,
    label: "CI/CD & Automation: Git, GitHub Actions",
  },
  {
    icon: <SparklesIcon className='h-5 w-5 text-orange-500' />,
    label: "AI & Data: Computer Vision, Machine Learning",
  },
  {
    icon: <ComputerDesktopIcon className='h-5 w-5 text-orange-500' />,
    label: "Operating Systems: Linux, MacOS, Windows",
  },
];

export default function SkillsSection() {
  return (
    <section className='bg-white dark:bg-gray-800 py-16 sm:py-24 transition-colors'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8'>
          Skills
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {skills.map((skill) => (
            <div
              key={skill.label}
              className='
                flex items-center 
                bg-gray-100 dark:bg-gray-700 
                rounded-md 
                p-4 
                border-l-4 border-orange-500 dark:border-orange-500 
                transition-shadow duration-200 
                hover:-translate-y-1 hover:shadow-lg
              '
            >
              <span className='mr-3'>{skill.icon}</span>
              <span className='text-gray-900 dark:text-white font-medium'>
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
