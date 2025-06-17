export default function Home() {
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-500 text-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow">
          Bem-vindos à Igreja do Avivamento
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Um lugar de fé, transformação e comunhão. Aqui, vidas são impactadas pelo poder de Deus.
          Venha adorar conosco e viver o verdadeiro avivamento!
        </p>
        <a
          href="#"
          className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Conheça nossos cultos
        </a>
      </div>
    </section>
  );
}
