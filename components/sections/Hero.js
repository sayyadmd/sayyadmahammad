import Link from 'next/link'
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sayyad Mahammad</span>. <br />
            Senior Full-Stack Developer.
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            I build scalable, high-performance web applications with modern technologies. 
            Focused on delivering exceptional user experiences and robust backend systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#projects"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-red-600 transition-colors">
              <FileText size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
