import { motion } from 'framer-motion'

const links = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ currentPage, setPage }) {
  return (
    <nav className="bg-gray-800 sticky top-0 z-20 shadow-md">
      <ul className="flex justify-center space-x-8 p-4">
        {links.map(link => (
          <motion.li
            key={link.id}
            whileHover={{ scale: 1.1, color: '#818CF8' }}
            className="cursor-pointer"
          >
            <button
              onClick={() => setPage(link.id)}
              className={`text-gray-300 font-semibold ${
                currentPage === link.id ? 'text-indigo-400 underline' : ''
              }`}
            >
              {link.label}
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}
