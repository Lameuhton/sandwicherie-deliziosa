export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <section
        id="about"
        className="about bg-gray-100 p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          À propos de nous
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="À propos de nous"
          className="mb-4 rounded-lg"
        />
        <p className="text-gray-700">
          Nous sommes une entreprise dédiée à fournir les meilleurs services à
          nos clients. Notre équipe est composée de professionnels expérimentés
          et passionnés par la technologie.
        </p>
      </section>
      <section
        id="services"
        className="services bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Nos Services</h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Nos Services"
          className="mb-4 rounded-lg"
        />
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">Service 1 - Description détaillée du service 1</li>
          <li className="mb-2">Service 2 - Description détaillée du service 2</li>
          <li className="mb-2">Service 3 - Description détaillée du service 3</li>
        </ul>
      </section>
      <section
        id="contact"
        className="contact bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Contactez-nous
        </h2>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Contactez-nous"
          className="mb-4 rounded-lg"
        />
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Nom:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}
