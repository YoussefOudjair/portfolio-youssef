import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const skillsData = [
  {
    category: 'Développement Web',
    icon: '💻',
    shadow: 'shadow-indigo-500/40',
    items: ['PHP', 'Laravel', 'HTML/CSS', 'JavaScript', 'Node.js', 'Vue.js', 'React'],
  },
  {
    category: 'CMS',
    icon: '🧱',
    shadow: 'shadow-purple-500/40',
    items: ['WordPress', 'Drupal', 'Shopify (E-commerce)'],
  },
  {
    category: 'Administration Système',
    icon: '🛠️',
    shadow: 'shadow-red-500/40',
    items: ['Docker', 'VirtualBox', 'VMware', 'Sécurisation', 'Apache sur Debian'],
  },
  {
    category: 'Développement Général',
    icon: '📘',
    shadow: 'shadow-blue-500/40',
    items: ['Python', 'Java', 'Ruby'],
  },
  {
    category: 'Intégration',
    icon: '🧪',
    shadow: 'shadow-yellow-400/40',
    items: ['PHUnit', 'JUnit', 'Selenium', 'Cucumber', 'Gherkin'],
  },
  {
    category: 'Base de données',
    icon: '📦',
    shadow: 'shadow-green-500/40',
    items: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Systèmes d’exploitation',
    icon: '💾',
    shadow: 'shadow-pink-500/40',
    items: ['Linux (Debian)', 'Windows (Vista → 11)'],
  },
  {
    category: 'Bureautique & Design',
    icon: '🎨',
    shadow: 'shadow-teal-400/40',
    items: ['MS Office', 'Photoshop', 'Canva', 'After Effects', 'Vegas Pro'],
  },
]

// Animation au scroll
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-gray-100">
      <motion.h2
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-5xl sm:text-6xl font-extrabold mb-16 text-center text-white stroke-text"
>
  Compétences
</motion.h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => {
          const isOpen = openIndex === index
          return (
            <motion.div
              key={index}
              layout
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              onClick={() => toggle(index)}
              whileHover={{ scale: 1.03 }}
              className={`cursor-pointer bg-gray-800 transition-all duration-300 rounded-2xl p-6 text-center flex flex-col items-center justify-center shadow-lg ${
                isOpen ? `${skill.shadow}` : 'hover:shadow-md'
              }`}
            >
              <motion.div layout className="flex items-center justify-center gap-2 mb-2 text-2xl font-bold">
                <span className="text-3xl">{skill.icon}</span>
                <span>{skill.category}</span>
                <span className="ml-2 text-xl">{isOpen ? '−' : '+'}</span>
              </motion.div>

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    key="list"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm mt-4 text-center space-y-1"
                  >
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
