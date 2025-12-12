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
        Je m'appelle <strong>Youssef Oudjair</strong>. Je suis passionné par le développement web et je cherche une <strong>alternance à partir de la rentrée 2025</strong> pour poursuivre mon <strong>Bachelor Développement Web à l’ISCOD</strong>, avec un rythme de <strong>1 jour en cours et 4 jours en entreprise.</strong>.
      </p>

      <p className="mb-4 text-left">
        Après mon <strong>BTS SNIR</strong>, j’ai continué à me former par moi-même pendant deux ans. Je n’ai pas trouvé d’alternance à ce moment-là, mais ça ne m’a pas freiné. Au contraire, ça m’a permis de progresser, d’expérimenter, de travailler sur des projets perso et de confirmer que c’est vraiment dans le développement web que je veux construire ma carrière.
      </p>

      <p className="mb-4 text-left">
      Aujourd’hui, je suis prêt à m’investir pleinement et à rejoindre une équipe où je pourrai apprendre, avancer et apporter ma motivation.
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
       Ce que je cherche, ce n’est pas seulement une alternance. J’ai besoin d’un endroit où je peux vraiment apprendre, progresser et m’impliquer dans des projets concrets. Un environnement qui me permette d’évoluer techniquement, mais aussi humainement.
      </p>
      <br />

      <h3 className="text-left">💡 <strong>Ce qui me définit</strong></h3>
      <p className="mb-4 text-left">
      <strong>Curieux</strong>, <strong>autonome</strong>et <strong>rigoureux</strong>, je cherche à apprendre en faisant et à maîtriser ce que je découvre.
      </p>
    </motion.section>
  )
}
