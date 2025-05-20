export default function Project2({ setPage }) {
    return (
      <section className="max-w-4xl mx-auto p-6 text-gray-100">
        <button
          onClick={() => setPage('projects')}
          className="mb-6 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
        >
          ← Retour aux projets
        </button>
  
        <h1 className="text-4xl font-bold mb-4">Projet API RESTful</h1>
  
        <p className="mb-4">
          Développement API RESTful avec Visual Studio Code et Spring Boot pour une gestion optimale des requêtes HTTP. Mise en œuvre de calculs financiers, incluant l’implémentation des marges commerciales, des taux de marge et des taux de change afin d’assurer une gestion efficace.
        </p>
        <p className="mb-4">
          Structuration du projet sous Maven pour la gestion des dépendances ainsi que l’automatisation des builds et des déploiements. Enfin, fiabilité garantie grâce à la validation des fonctionnalités via des tests unitaires réalisés avec JUnit.
        </p>
  
        <p className="mb-4 font-semibold">Technologies utilisées :</p>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>Visual Studio Code</li>
          <li>Spring Boot</li>
          <li>Maven</li>
          <li>JUnit</li>
          <li>Java</li>
        </ul>
  
        <p>
          <a
            href="https://github.com/YoussefOudjair/Projet-API-JAVA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline"
          >
            Voir le projet sur GitHub
          </a>
        </p>
      </section>
    )
  }
  