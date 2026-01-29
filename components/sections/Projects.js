import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with real-time inventory, Stripe encryption, and admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://vercel.com',
    image: '/images/project1.jpg', // Placeholder, handles missing image gracefully usually or need to add one
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates using WebSockets and team workspaces.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://vercel.com',
    image: '/images/project2.jpg',
  },
  {
    title: 'AI Content Generator',
    description: 'SaaS application that uses OpenAI API to generate marketing copy and blog posts.',
    tags: ['Next.js', 'OpenAI API', 'Tailwind', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://vercel.com',
    image: '/images/project3.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                   {/* Placeholder for project image */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                     [Project Image]
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      <Github size={18} /> Code
                    </Link>
                    <Link href={project.demo} target="_blank" className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      <ExternalLink size={18} /> Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
