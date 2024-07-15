import Header from '@/components/Header'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {

  return (
    <main className=''>
      <Header />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
