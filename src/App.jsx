import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Project1 from './pages/Project1.jsx'
import Project2 from './pages/Project2.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Navbar currentPage={page} setPage={setPage} />

      <main className="min-h-screen bg-gray-900 text-gray-100 p-6 max-w-5xl mx-auto">
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'projects' && <Projects setPage={setPage} />}
        {page === 'project1' && <Project1 setPage={setPage} />}
        {page === 'project2' && <Project2 setPage={setPage} />}
        {page === 'skills' && <Skills />}
        {page === 'contact' && <Contact />}
      </main>
    </>
  )
}
