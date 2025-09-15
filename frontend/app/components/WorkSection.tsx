const workHistory = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Segula Technologies GmbH",
    location: "Cologne, Germany",
    period: "April 2021 - Present",
  },
  {
    id: 2,
    title: "Intern & Master Thesis",
    company: "AVL Deutschland GmbH",
    location: "Stuttgart, Germany",
    period: "May 2019 - December 2020",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Changepond Technologies",
    location: "Chennai, India",
    period: "January 2015 - December 2017",
  },
];

export default function WorkSection() {
  return (
    <section className='bg-white dark:bg-gray-800 py-12 sm:py-20 transition-colors'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
          Work History
        </h2>
        <div className='space-y-6'>
          {workHistory.map((job) => (
            <div
              key={job.id}
              className='bg-white dark:bg-gray-700 border border-gray-300 dark:border-blue-700 rounded-lg p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg'
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
                <div className='text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0'>
                  {job.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
