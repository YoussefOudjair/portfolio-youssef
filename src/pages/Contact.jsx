import { motion } from 'framer-motion'

const contactData = [
  {
    id: 'email',
    icon: '📧',
    label: 'Email',
    value: 'youdjair@gmail.com',
    href: 'mailto:youcef.jair@gmail.com',
    shadow: 'shadow-indigo-500/50',
  },
  {
    id: 'phone',
    icon: '📞',
    label: 'Téléphone',
    value: '06.59.66.67.90',
    href: 'tel:+33659666790',
    shadow: 'shadow-green-500/50',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Contact() {
  return (
    <motion.section
      className="py-20 px-4 max-w-4xl mx-auto text-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold mb-16 text-center text-indigo-400">Contact</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {contactData.map(({ id, icon, label, value, href, shadow }) => (
          <motion.a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className={`relative bg-gray-800 rounded-3xl p-12 flex flex-col items-center justify-center cursor-pointer text-center text-2xl font-semibold transition-all hover:bg-indigo-600 hover:text-white shadow-lg ${shadow}`}
          >
            {/* Lueur derrière */}
            <span
              className={`absolute -inset-1 rounded-3xl blur-xl opacity-60 pointer-events-none ${shadow}`}
            ></span>

            <span className="relative z-10 text-6xl mb-6">{icon}</span>
            <span className="relative z-10">{label}</span>
            <span className="relative z-10 mt-2 text-lg text-indigo-300">{value}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
