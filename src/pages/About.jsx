import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8 max-w-3xl mx-auto text-gray-300"
    >
      <h2 className="text-3xl font-bold mb-6 text-indigo-400 text-left">
        À propos
      </h2>      

      <p className="mb-4 text-left">
        Je m'appelle <strong>Youssef Oudjair</strong>, passionné par le développement web et actuellement à la recherche d'une <strong>alternance en développement Full Stack</strong> à partir de <strong>septembre 2025</strong>, pour intégrer la <strong>L3 MIAGE à l’université Paris Nanterre</strong>.
      </p>

      <p className="mb-4 text-left">
        Diplômé d’un <strong>BTS SNIR</strong>, j’ai continué à me former de manière autodidacte pendant deux ans. Malgré une recherche d’alternance constante, je n’ai pas pu reprendre mes études immédiatement, mais ce parcours atypique renforce aujourd’hui ma détermination à apprendre, contribuer et construire un avenir professionnel solide.
      </p>

      <br />

      <h3 className="text-left">🛠️ <strong>Compétences techniques</strong></h3>
      <ul className="text-left list-disc list-inside mb-4 text-gray-300">
        <li><strong>Frontend :</strong> HTML, CSS, JavaScript, React, Vue.js, Tailwind</li>
        <li><strong>Backend :</strong> Node.js, Express.js, PHP (Laravel)</li>
        <li><strong>Base de données :</strong> MySQL, PostgreSQL</li>
        <li><strong>Outils :</strong> Git / GitHub / GitLab, Visual Studio Code</li>
      </ul>

      <br />

      <h3 className="text-left">🚀 <strong>Projets réalisés</strong></h3>
      <ul className="text-left list-disc list-inside mb-4 text-gray-300">
        <li>Création d’un site e-commerce fullstack (React + Node + PostgreSQL)</li>
        <li>API REST avec Spring Boot pour des calculs financiers</li>
        <li>Applications CRUD avec Laravel (authentification, dashboard, upload de fichiers)</li>
        <li>Intégration front responsive à partir de maquettes Figma</li>
      </ul>

      <br />

      <h3 className="text-left">🎯 <strong>Objectif</strong></h3>
      <p className="mb-4 text-left">
        Ce que je cherche, ce n’est pas juste un contrat : c’est un vrai terrain d’apprentissage. Un environnement où je peux monter en compétences, m’impliquer dans des projets concrets et avancer techniquement et humainement.
      </p>

      <br />

      <h3 className="text-left">💡 <strong>Ce qui me définit</strong></h3>
      <p className="mb-4 text-left">
        Je suis <strong>curieux</strong>, <strong>autonome</strong>, à l’écoute et rigoureux. J’ai un vrai goût pour le travail bien fait, pour la résolution de problèmes, et surtout pour tout ce que je ne maîtrise pas encore. J’aime comprendre en profondeur ce que je fais et pourquoi je le fais.
      </p>
    </motion.section>
  )
}
