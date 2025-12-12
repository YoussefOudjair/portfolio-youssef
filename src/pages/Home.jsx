import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16"
    >
      <h1 className="text-6xl font-extrabold mb-4">Youssef Oudjair</h1>
      <p className="text-xl text-gray-300 max-w-xl mx-auto">
        Développeur Web junior – En recherche d'alternance
      </p>
    </motion.section>
  )
}
