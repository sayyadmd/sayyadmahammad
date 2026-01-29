import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${inter.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}
