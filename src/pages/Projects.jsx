export default function Projects({ setPage }) {
    return (
      <section>
        {/* Projet 1 */}
        <div
          onClick={() => setPage('project1')}
          className="cursor-pointer p-6 bg-gray-800 rounded-lg mb-6 hover:bg-indigo-600 transition"
        >
          <h3 className="text-2xl font-bold text-white">Site e-commerce Node.js</h3>
          <p className="text-gray-400">
            Prototype d’un site e-commerce développé avec Node.js et Express.
          </p>
        </div>
  
        {/* Projet 2 */}
        <div
          onClick={() => setPage('project2')}
          className="cursor-pointer p-6 bg-gray-800 rounded-lg mb-6 hover:bg-indigo-600 transition"
        >
          <h3 className="text-2xl font-bold text-white">Projet API RESTful</h3>
          <p className="text-gray-400">
            Développement API RESTful avec Visual Studio Code et Spring Boot, gestion de calculs financiers, automatisation avec Maven et tests unitaires.
          </p>
        </div>
      </section>
    )
  }
  