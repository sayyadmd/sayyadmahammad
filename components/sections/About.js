import { motion } from 'framer-motion'
import { Code, Database, Wrench } from 'lucide-react'

export default function About() {
  const skills = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    Backend: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'AWS'],
    Tools: ['Git', 'Docker', 'Jest', 'CI/CD', 'Figma'],
  }

  const icons = {
    Frontend: <Code size={24} className="text-blue-500" />,
    Backend: <Database size={24} className="text-green-500" />,
    Tools: <Wrench size={24} className="text-orange-500" />,
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With over 4 years of experience in full-stack development, I specialize in building 
                scalable web applications that solve real-world problems. My journey started with 
                vanilla JavaScript and has evolved into mastering the modern React ecosystem.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and prioritizing user experience. 
                Whether it's optimizing database queries or crafting smooth UI animations, 
                I pay attention to every detail of the stack.
              </p>
            </div>
            
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    {icons[category]}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
