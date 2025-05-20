export default function Project1({ setPage }) {
    return (
      <section className="max-w-4xl mx-auto p-6 text-gray-100">
        <button
          onClick={() => setPage('projects')}
          className="mb-6 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
        >
          ← Retour aux projets
        </button>
  
        <h1 className="text-4xl font-bold mb-4">Site e-commerce Node.js</h1>
  
        <p className="mb-4">
          Ce projet personnel est un prototype d’un site e-commerce développé avec Node.js et Express, utilisant EJS pour le rendu côté serveur.
        </p>
        <p className="mb-4">
          Il permet d’afficher un catalogue de produits, gérer un panier simple et naviguer entre différentes pages grâce à un routage Express.
        </p>
        <p className="mb-4">
          Technologies : Node.js, Express, EJS, CSS, JavaScript.
        </p>
  
        <p>
          <a
            href="https://github.com/YoussefOudjair/Site-e-commerce-NODEJS-de-Youssef"
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
  