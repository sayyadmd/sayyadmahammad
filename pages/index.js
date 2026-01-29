import Head from 'next/head'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sayyad Mahammad | Senior Full-Stack Developer</title>
        <meta name="description" content="Portfolio of a Senior Full-Stack Developer specialized in Next.js, React, and Node.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
