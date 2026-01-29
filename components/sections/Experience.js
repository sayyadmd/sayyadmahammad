import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'TechCorp Solutions',
    period: '2023 - Present',
    description: 'Leading a team of 3 developers in rebuilding the core SaaS platform.',
    achievements: [
      'Improved application load time by 40% through server-side rendering and caching strategies.',
      'Architected a microservices-ready backend handling 50k+ daily active users.',
      'Implemented automated CI/CD pipelines reducing deployment time by 60%.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Innovate Digital',
    period: '2021 - 2023',
    description: 'Developed and maintained robust e-commerce solutions for enterprise clients.',
    achievements: [
      'Integrated Stripe payment gateway processing $1M+ in monthly revenue.',
      'Optimized database schemas reducing query latency by 25%.',
      'Mentored junior developers and introduced strict code review processes.'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Studio',
    period: '2020 - 2021',
    description: 'Focused on creating pixel-perfect user interfaces and interactive web experiences.',
    achievements: [
      'Built a component library used across 5 different internal products.',
      'Collaborated with designers to implement responsive designs for all device sizes.',
      'Introduced React Testing Library increasing test coverage to 80%.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Work Experience
          </h2>

          <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <div className="w-3 h-3 bg-blue-600 rounded-full dark:bg-blue-300"></div>
                </span>
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
