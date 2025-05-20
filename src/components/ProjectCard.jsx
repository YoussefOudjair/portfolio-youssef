import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(79, 70, 229, 0.3)' }}
      className="bg-gray-800 rounded-lg p-6 cursor-pointer"
      onClick={() => window.open(link, '_blank')}
      role="button"
      tabIndex={0}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <p className="mt-3 text-indigo-400 underline">Voir le projet</p>
    </motion.div>
  )
}
